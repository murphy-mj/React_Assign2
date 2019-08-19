import React, {Fragment } from "react";
import { withRouter,Route,Link } from "react-router-dom";
import api from "../dataStore/stubAPI";
import PointPublic from "../components/poiPublic/";
import PointPrivate from "../components/poiPrivate/";
//import NewsForm from "../components/newsForm/";
import NewsList from "../components/newsList/";
//import fakeAuth from "./fakeAuth";

const PointPage = props => {
    const { id } = props.match.params;
    const {testa} = props.location.state;
    const point = api.getPoint(id);
    console.log(`point page testa attribute ${testa}`);
    point.poiType = testa;
    console.log(`props obj history locatio path  props.history.location.pathname`);
    console.log(` points new atribute ${point.poiType}`);

    if( props.history.location.state == "undefined") {
        console.log("In point apgrhistory state is un defined ");
    };

    return (
        <Fragment>
        {point ? (
           <Fragment>
           <PointPublic point={point} prevmenu={props.history.location.pathname}/>
           <NewsList posts={point.comments} point={point}/>
           {!props.history.location.pathname.endsWith("/private") && (
                   <Link  to={`/point/${id}/private`}><button> See Private Data</button> </Link>
           )}
          <Route path={`/point/:id/private`}
              render={ (props) => <PointPrivate point={point} prevmenu={props.history.location.pathname}/> } />
           </Fragment>
        ) : (
           <Fragment>
           <p>Waiting for point details</p>
           </Fragment>
         )}
        </Fragment>
        );
};

export default withRouter(PointPage);
