import React, { Fragment } from "react";

export default ({ point, ...rest }) => {
    return (
        <Fragment>
          <h4> <span> "Welcome to the Private Profile"</span> </h4>
          <h4> <span>Private Description: {point.description}</span> </h4>
        </Fragment>
);
};