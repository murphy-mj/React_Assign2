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
import AuthButton from "../AuthButton";
import PoiPrivate from "../poiPrivate";

class PrivateRoute extends Component {
    render() {

        console.log(" props in Private route " + fakeAuth.isAdmin + " <- admin? " + fakeAuth.isAuthenticated );
        console.log(this.props);
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest}
        render={props => {
            // console.log(props);
            return (fakeAuth.isAuthenticated === true ) ? (
                <Component {...props} point={api.getPoint(props.match.params.id)} prevmenu={this.props.location.pathname} />
        ) : (
            <Redirect
            to={{
             //   pathname: "/login",
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