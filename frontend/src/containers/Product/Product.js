import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteProduct, fetchProduct} from "../../store/actions/productsActions";
import {Button} from 'reactstrap';

class Product extends Component {
    componentDidMount() {

        this.props.fetchProduct(this.props.match.params.id);
        if (this.props.user === null){
            this.props.history.push('/register')
        }
    }

    render() {

        let deleteProduct = '';
        if (this.props.user) {
            if (this.props.product.user === this.props.user._id) {
                deleteProduct = <Button onClick={() => this.props.deleteProduct(this.props.match.params.id)}>Delete</Button>
            }
        }
        return (
            <>
                <img src={`http://localhost:8000/uploads/${this.props.product.image}`} alt="" style={{width:'300px',height:'300px'}}/>
                <h1>title:{this.props.product.title}</h1>
                <h2>description:{this.props.product.description}</h2>
                <h2>sailor:{this.props.user.username}</h2>
                <h3>{this.props.product.price}</h3>
                <p>{this.props.delete}</p>
                {deleteProduct}
            </>
        );
    }
}

const mapStateToProps = state => ({
    product:state.products.product,
    delete:state.products.delete,
    user:state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchProduct:id => dispatch(fetchProduct(id)),
    deleteProduct:id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps,mapDispatchToProps) (Product);