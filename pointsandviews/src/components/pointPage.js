import React, {Component, Fragment } from "react";
import { withRouter,Route,Link } from "react-router-dom";
import api from "../dataStore/stubAPI";
import PointPublic from "../components/poiPublic/";
import PointPrivate from "../components/poiPrivate/";
import NewsForm from "../components/newsForm/";
import NewsList from "../components/newsList/";

const PointPage = props => {
    const { id } = props.match.params;
    const {testa} = props.location.state;
    console.log(id + " <--from Point Page, point id");
    const point = api.getPoint(id);
    console.log(" point page testa attribute" + `${testa}`);
    point.poiType = testa;
    console.log("i'm in Page Point");
    console.log(" props obj history locatio path" + props.history.location.pathname);
    console.log(" points new atribute" + `${point.poiType}`);
    // !props.history.location.pathname.endsWith("/private") &&
    // //   <PointPublic point={point}/>
    //<Route path={`/point/:id/privates`}
    //               render= {(props) => <PointPrivate {...props} point={point} /> } />
    //  {!props.history.location.pathname.endsWith("/privates") && (
    //               <Link className="btn btn-primary active" to={`/point/${id}/privates`}> See Private Data </Link>
    //           )}


    return (
        <Fragment>
        {point ? (
           <Fragment>
           <PointPublic point={point}/>
           <NewsList posts={point.comments} point={point}/>
           {!props.history.location.pathname.endsWith("/private") && (
                   <Link  to={`/point/${id}/private`}> See Private Data </Link>
           )}
          <Route path={`/point/:id/private`}
              render={ (props) => <PointPrivate point={point} /> } />
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
