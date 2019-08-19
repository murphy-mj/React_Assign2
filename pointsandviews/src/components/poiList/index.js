import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import Point from "../pointofinterest/";
import PointView from "../pointofinterestView/";
import fakeAuth from "../fakeAuth";
//import NewsItem from "../newsItem";
//import './pointList.css';

class PointList extends Component {
        render() {
        // the array that will be returned
        let pointCards = [];
        // these logs for info purposes only
        console.log("in point list");
        console.log(" props location .pathname "+ this.props.location.pathname);
        console.log(" props history location state pathname is  "+ this.props.history.location.state);


        // if is Admin is false, then the user then the user has restricted access
        // the user can vote, add a comment  and view
        // we use a pointView component for their display
        if(fakeAuth.isAdmin === false) {
        const  pointCards1 = this.props.points.map(c => (
                    <PointView key={c.cursor} point={c}   upvoteHandler={this.props.upvoteHandler} poiType={this.props.poiType}/>
        ));
            pointCards = pointCards1;
        };
        /*
        if is Admin is true, then the user has full access
        the user can vote, add a comment  and view, edit and delete a point
        we use a point component for their display and pass extra props
        */
        if(fakeAuth.isAdmin === true) {
        const  pointCards2 = this.props.points.map(c => (
                    <Point key={c.cursor} point={c} deleteHandler={this.props.deleteHandler}
                      editHandler={this.props.editHandler}
                      upvoteHandler={this.props.upvoteHandler} poiType={this.props.poiType} />
        ));
            pointCards = pointCards2;
        };

        return (
            <div className="container-fluid contacts bg-info">
            <div className="row">{pointCards}</div>
            </div>
    );
    }
}
export default withRouter(PointList);