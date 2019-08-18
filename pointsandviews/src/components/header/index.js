import React, { Component, Fragment } from "react";
import fakeAuth from "../fakeAuth";


class Header extends Component {
    render() {
        // the header will display a heading based on the logn button chosen by user
        // the Senior Administrator has extra optons eg delete and edit points
            return(
                 <Fragment>
            { (fakeAuth.isAdmin === false)  ? (
                <div>
                 <h2>Welcome, thank you for logging in</h2>
                 <h3> Points of Interest List </h3>
                 <h4><span className="badge badge-pill badge-success">The numbr of points in the area selected is {this.props.noPoints}</span></h4>
               </div>
           ) : (
               <div>
                <h2>Welcome Senior Admistrator</h2>
                <h4> This is the entire list of points, please select an area before proceeding</h4>
                <h4><span className="badge badge-pill badge-success">The numbr of points in the area selected is {this.props.noPoints}</span></h4>
               </div>
    )}
    </Fragment>
                 );
}
}
export default Header;