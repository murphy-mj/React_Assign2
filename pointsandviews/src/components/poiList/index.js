import React, { Component } from "react";
import { withRouter,Route,Link } from "react-router-dom";
import Point from "../pointofinterest/";
import PointView from "../pointofinterestView/";
// import PointForm from "../pointForm/";
import fakeAuth from "../fakeAuth";
import NewsItem from "../newsItem";
//import './pointList.css';

class PointList extends Component {
        render() {
        let pointCards = [];
        console.log("in point list");
        console.log(" props location .pathname "+ this.props.location.pathname);
        console.log(" props history location state pathname is  "+ this.props.history.location.state);
        console.log(this.props);
        console.log(this.props.history);
        if(fakeAuth.isAdmin === true) {
            console.log("im admin  is true");
        const  pointCards1 = this.props.points.map(c => (
                    <PointView key={c.cursor} point={c} deleteHandler={this.props.deleteHandler}  upvoteHandler={this.props.upvoteHandler} poiType={this.props.poiType}/>
        ));
            pointCards = pointCards1;
        };
        if(fakeAuth.isAdmin === false) {
            console.log("im admin  is false, and poiType is " + this.props.poiType);
        const  pointCards2 = this.props.points.map(c => (
                    <Point key={c.cursor} point={c} deleteHandler={this.props.deleteHandler} upvoteHandler={this.props.upvoteHandler} poiType={this.props.poiType} />
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