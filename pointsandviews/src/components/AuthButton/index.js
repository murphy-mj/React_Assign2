import React, { Component } from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import fakeAuth from "../fakeAuth";

const AuthButton = props => {
    const { history } = props;
    return fakeAuth.isAuthenticated ? (
        <p>
        Welcome!{" "}
        <button
    onClick={() => {
        fakeAuth.signout(() => history.push("/"));
    }}
>
    Sign out
    </button>
    </p>
) : (
    <p>You are not logged in.</p>
);
};
export default withRouter(AuthButton);