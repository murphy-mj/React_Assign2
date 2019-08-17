import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ point }) => {
    const address = capitalize(
        `${point.coordinates.geo.long}, ${point.coordinates.geo.lat}`
    );

    return (
        <Fragment>
        <h4>
        <FontAwesomeIcon icon={["fas", "home"]} />
    <span> `{address} "In public Prifile"`</span>
    </h4>
    <h4>
    <FontAwesomeIcon icon={["fas", "phone"]} />
    <span> {point.name}</span>
    </h4>
    <h4>
    <span> {point.description}</span>
    </h4>

    </Fragment>
);
};