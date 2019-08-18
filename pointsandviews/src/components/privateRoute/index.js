import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link,
    withRouter
} from "react-router-dom";
import api from "../../dataStore/stubAPI";
import fakeAuth from "../fakeAuth/";
import PoiPrivate from "../poiPrivate";

class PrivateRoute extends Component {

    // to get into the private component, the person must be logged in, otherwise it will be directed to the login page
    // to move from the private component back to the public one, we must pass a prop called "prevMenu". this is the
    // current url pathname.
    // from the url, we can extract the id of the point of interest, and using the stub API, we can extract the point of interest

    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest}
        render={props => {
            return (fakeAuth.isAuthenticated === true ) ? (
                <Component {...props} point={api.getPoint(props.match.params.id)} prevmenu={this.props.location.pathname} />
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                    state: { from: this.props.location.pathname }
            }}
            />
        );
        }}
        />
    );
    }
}

export default PrivateRoute;