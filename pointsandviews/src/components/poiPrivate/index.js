import React, { Fragment } from "react";
import { capitalize } from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./poiPrivate.css";
import { Link } from "react-router-dom";
import PrivateProfile from "../poiPrivate/privateProfile";



export default ({ point,...rest}) => {
    const name = capitalize(`${point.name}`);
 //   const { id } = `${point.cursor}`;
    console.log(`private point prev menu is ${rest.prevmenu}`);
    // generating the return route from the point ID
    // additional state data, is for future reporting requirent


    return (
        <Fragment>
        <div className="row">
          <div className="col-2">
            <Link to={{
              pathname:`/point/${point.cursor}`,
                state:{
                  testa:`${point.poiType}`,
                   prevmenu: rest.prevmenu
                }
             }}>
               <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
               <span>Back to prevous page</span>
            </Link>
          </div>
          <div className="col-3 offset-2">
           <h2>{name}</h2>
          </div>
        </div>
           <PrivateProfile point={point} />
    </Fragment>
);
};