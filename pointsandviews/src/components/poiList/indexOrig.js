import React, { Component } from "react";
import Point from "../pointofinterest/";
import './pointList.css';

export default class PointList extends Component {
    render() {
        this.props.points.map(c => (
            console.log(c.name)
        ));
        const pointCards = this.props.points.map(c => (

            <Point key={c.phone} point={c} />
    ));
        return (
            <div className="container-fluid contacts bg-info">
            <div className="row">{pointCards}</div>
            </div>
    );
    }
}