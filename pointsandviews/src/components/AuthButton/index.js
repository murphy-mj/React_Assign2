import React, { Component } from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import fakeAuth from "../fakeAuth";

const AuthButton = props => {
    // hostory is one of the props that gets pushed to a component when withRouter is used.
    // this component allows the user to see if they are logged in, and to log out safely
    // if the user directly manipulates the url, the user will be pushed to the home directory.
    // in the app compoment will implement this
    const { history } = props;
    return fakeAuth.isAuthenticated ? (
        <h2>
        Please, sign out before you exit!{" "}
        <button className="Auth-Button"
    onClick={() => {
        fakeAuth.signout(() => history.push("/"));
    }}
>
    Sign out
    </button>
    </h2>
) : (
    <p>You are not logged in.</p>
);
};
export default withRouter(AuthButton);