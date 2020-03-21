import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {registerUser} from "../../store/actions/action";
import {connect} from "react-redux";
import FormElement from "../../components/Form/FormElement";

class Register extends Component {
    state = {
        username: '',
        password: '',
        displayName:'',
        phoneNumber:''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.registerUser({...this.state});
    };

    getFieldError = fieldName => {
        try {
            return this.props.error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    render() {
        return (
            <>
                <h2>Register new user</h2>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="username"
                        title="Username"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('username')}
                        placeholder="Enter username"
                        autoComplete="new-username"
                    />
                    <FormElement
                        propertyName="password"
                        title="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('password')}
                        placeholder="Enter password"
                        autoComplete="new-password"
                    />
                    <FormElement
                        propertyName="displayName"
                        title="displayName"
                        type="displayName"
                        value={this.state.displayName}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('displayName')}
                        placeholder="Enter displayName"
                        autoComplete="new-displayName"
                    />
                    <FormElement
                        propertyName="phoneNumber"
                        title="phoneNumber"
                        type="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('phoneNumber')}
                        placeholder="Enter phoneNumber"
                        autoComplete="new-phoneNumber"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="primary">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
    loading: state.users.registerLoading,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);