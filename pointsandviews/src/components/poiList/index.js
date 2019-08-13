import React, { Component } from "react";
import Point from "../pointofinterest/";
import PointView from "../pointofinterestView/";
// import PointForm from "../pointForm/";
import fakeAuth from "../fakeAuth";
//import './pointList.css';

export default class PointList extends Component {
        render() {
        let pointCards = [];
        console.log("in point list");
       // console.log(" props poi list location  "+ this.props.location);
       // console.log(" props poi list history   "+ this.props.history);

        if(fakeAuth.isAdmin === true) {
            console.log("im admin  is true");
        const  pointCards1 = this.props.points.map(c => (
                    <PointView key={c.cursor} point={c} deleteHandler={this.props.deleteHandler}  upvoteHandler={this.props.upvoteHandler} poiType={this.props.poiType}/>
        ));
            pointCards = pointCards1;
        };
        if(fakeAuth.isAdmin === false) {
            console.log("im admin  is false");
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