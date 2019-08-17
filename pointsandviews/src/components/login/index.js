import React, { Component,Fragment } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    withRouter
} from "react-router-dom";
import fakeAuth from "../fakeAuth";
import PrivateRoute from "../privateRoute";




class Login extends Component {
    state = {
        redirectToReferrer: false,
        username: null,
        admin: false
    };

    login = () => {
        fakeAuth.authenticate(this.state.username, () => {
            this.setState({ redirectToReferrer: true });
        });
    };
    condt = () => {
        fakeAuth.authenticateAdmin(this.state.username, () => {
        });
        fakeAuth.authenticate(this.state.username, () => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { redirectToReferrer } = this.state;
        const { admin } = this.state;
        const { from } = this.props.location.state || { from: { pathname: "/" } };
      //  if (redirectToReferrer === true && admin === false) {
      //      return <Redirect to={from}/>;
      //  }
      //  if (redirectToReferrer === true && admin === true) {
      //      return <PrivateRoute to={from}/>;
      //  }

        return (
        <Fragment>
        <Link to="/app"><button onClick={this.login}> AdminControl</button></Link>
        <Link to="/app"> <button onClick={this.condt}>Admin</button></Link>
         </Fragment>
        );
    }
}

export default Login;