import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./poiPrivate.css";
import { Link } from "react-router-dom";
//import PublicProfile from "../poiPublic/publicProfile";
import PrivateProfile from "../poiPrivate/privateProfile";



export default ({ point,...rest}) => {
    const name = capitalize(`${point.name}`);
    return (
        <Fragment>
        <div className="row">

        <div className="col-2">
        <Link to={{
        pathname:"/app",
            state:{
            testa:`${point.poiType}`,
                prevmenu: null
        }
        }}>
        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
        <span>Back from poiPrivate</span>
        </Link>
        </div>

        <div className="col-3 offset-2">
        <h2>{name}</h2>
        </div>

        </div>


        <div className="row">

        <div className="col-3">
        </div>

        <div className="col-4">
        <PrivateProfile point={point} />
    </div>

    <div className="col-5" >


    </div>
    </div>
    </Fragment>
);
};