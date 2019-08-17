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
    const { id } = `${point.cursor}`;
   console.log(`"private point' prev menu"${rest.prevmenu}`);
   console.log({point});
   console.log(`${point.cursor}`);
   console.log(`/point/${point.cursor}`);

    return (
        <Fragment>
        <div className="row">

        <div className="col-2">
        <Link to={{
        //pathname:"/app",
        // pathname:rest.prevmenu,
         pathname:`/point/${point.cursor}`,
            state:{
            testa:`${point.poiType}`,
                prevmenu: rest.prevmenu
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