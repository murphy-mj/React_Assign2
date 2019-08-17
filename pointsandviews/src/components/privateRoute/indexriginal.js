import React from "react";
import "./poiPrivate.css";
import "../../fontawesome";

export default ({point}) => {
    console.log(point.name + " in poi private ");
    return (
        < div
    className = "row" >
        < div
    className = "col-12" >
        < ul
    className = "specs" >
        < li >
        < span > Login < /span>
        < /li>
        < li >
        < span > Coordinates < /span>
        < dl >
        < dt > Longitude < /dt>
        < dd > {point.coordinates.geo.long} < /dd>
        < dt > Latitude < /dt>
        < dd > {point.coordinates.geo.lat} < /dd>
        < /dl>
        < /li>
        < li >
        < span > Coastal
    Zone
    meeeee < /span>
    < dl >
    < dt > {point.costalZone} < /dt>
    < /dl>
    < /li>
    < li >
    < span > Registered < /span>
    < /li>
    < /ul>
    < /div>
    < /div>
);
};