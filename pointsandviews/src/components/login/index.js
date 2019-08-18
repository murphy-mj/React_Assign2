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

// the genal admin user, just set the Authentication to true, as they have restricted access
    loginAdmin = () => {
        fakeAuth.authenticate(this.state.username, () => {
            this.setState({ redirectToReferrer: true });
        });
    };

  // senior login sets the fake Authentication's is Admin user and is Authenticated to true
    loginSenior = () => {
        fakeAuth.authenticateAdmin(this.state.username, () => {
        });

        fakeAuth.authenticate(this.state.username, () => {
            this.setState({ redirectToReferrer: true });
        });
    };



    render() {
        let redirectToReferrer = null;
        let admin = null;
        let from = null;

        if(this.state === undefined) {

        } else {
            redirectToReferrer = this.state.redirectToReferrer;
            admin = this.state.admin;
        };


        return (
        <Fragment>
        <div className="login-body">
        <Link to="/app"><button className = "login-control" onClick={this.loginSenior}>SeniorAdmin</button></Link>
        <Link to="/app"> <button className = "login-control" onClick={this.loginAdmin}>GeneralAdmin</button></Link>
        </div>
         </Fragment>
        )
    };
}
export default Login;