import React from "react";



const fakeAuth = {
    isAuthenticated: false,
    isAdmin:false,

    // min require that user enters the app through the login page
    authenticate(username, cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },

    // isAdmin is the senior admim user, the general admin user has restricted access
    authenticateAdmin(username, cb) {
        this.isAdmin = true;
        setTimeout(cb, 100); // fake async
    },

    // reset the users access rights
    signout(cb) {
        this.isAuthenticated = false;
        this.isAdmin = false;
        setTimeout(cb, 100); // fake async
    }
};

export default fakeAuth;