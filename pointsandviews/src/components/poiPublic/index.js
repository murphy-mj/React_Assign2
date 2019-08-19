import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./poiPublic.css";
import { Link } from "react-router-dom";
//import PublicProfile from "../poiPublic/publicProfile";
import Map from "../map/";
const REACT_APP_GAPI_KEY1 = "AIzaSyD5sVluWImCyGXbY-hizgc61Pec_-yTTJc";
    //process.env.REACT_APP_GAPI_KEY.trim();


export default ({ point, ...rest}) => {
    const str1 = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GAPI_KEY1}&v=3.exp&libraries=geometry,drawing,places`;
    const name = capitalize(`${point.name}`);
    const address = capitalize(
        `${point.coordinates.geo.long}, ${point.coordinates.geo.lat}`
    );
    const location = {lng:parseFloat(point.coordinates.geo.long),lat:parseFloat(point.coordinates.geo.lat)};

   // console.log(`${point.coordinates.geo.long}`);
   // console.log(`${point.coordinates.geo.lat}`);
   //  console.log({location});
   //const location = {lng:-7.142379, lat: 55.89 };
    console.log(`${point.poiType}  poi Public prop`);
    console.log(`${rest.prevmenu}  poi previous menu`);


    return (
        <Fragment>
        <div className="row">

          <div className="col-1">
            <Link to={{
             pathname:"/app",
               state:{
                 testa:`${point.poiType}`,
                 prevmenu: `${rest.prevmenu}`}
            }}>
              <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
              <span>Back</span>
            </Link>
          </div>

          <div className="col-2 offset -3">
            <h2>{name}</h2>
          </div>
        </div>

        <h4>longitude and latitude {address}</h4>


    <Map
    isMarkerShown
   // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    googleMapURL = {str1}
    loadingElement={<div style={{ height: `100%` }} />}
    location={location}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
    </Fragment>
);
};