import React, {Component, Fragment} from 'react';
import Toolbar from "./components/Tollbar/Toolbar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";


class App extends Component {
  render() {
    return (
        <Fragment>
          <header>
            <Toolbar/>
          </header>
          <Container style={{marginTop: '20px'}}>
            <Switch>
              <Route path="/" exact component={Products}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>

            </Switch>
          </Container>
        </Fragment>
    );
  }
}

export default App;