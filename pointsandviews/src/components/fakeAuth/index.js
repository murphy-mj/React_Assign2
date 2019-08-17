import React from "react";



const fakeAuth = {
    isAuthenticated: false,
    isAdmin:false,

    authenticate(username, cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    authenticateAdmin(username, cb) {
        console.log(" in auth Admin");
        this.isAdmin = true;
        setTimeout(cb, 100); // fake async
    },

    signout(cb) {
        this.isAuthenticated = false;
        this.isAdmin = false;
        setTimeout(cb, 100); // fake async
    }
};

export default fakeAuth;