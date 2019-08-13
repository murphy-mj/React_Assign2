import React, { Component, Fragment } from "react";
import fakeAuth from "../fakeAuth";


class Header extends Component {
    render() {


        console.log(fakeAuth.isAdmin + " is Admin");
       // return (
       //     <div className="container-fluid">
       //     <div className="row">
       //     <div className="col-md-6 offset-4">
       //     <div className="page-header">

            return(
                 <Fragment>
            { (fakeAuth.isAdmin === true)  ? (
                <div>
                <h1>Welcome Admin Person</h1>
               <h1> Points of Interest List </h1>
               <span className="badge badge-pill badge-success">{this.props.noPoints}</span>
               </div>
           ) : (
               <div>
               <h1>Welcome general Person</h1>
               <h1> Points of Interest List</h1>
               <span className="badge badge-pill badge-success">{this.props.noPoints}</span>
               </div>
    )}
    </Fragment>
                 );
}
}

export default Header;