import React, { Component } from "react";
import "./filterControls.css"
import request from "superagent";
import api from "../../dataStore/stubAPI";
//import Point from "../pointofinterest";


export default class FilterControls extends Component {

    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };

    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };

    handlePoiTypeChange = e => {
        this.handleChange(e, "poiType", e.target.value);
    };

    render() {

        return (
            <div className="container-fluid">
            <div className="row bg-warning">
            <div className="col-md-12">
            <h4>

            <span>Filter by Name </span>
            <input type="text" placeholder="Type Search"  onChange={this.handleTextChange}/>
            <span> Select based on  Loction: </span>
            <select id="poiType" onChange={this.handlePoiTypeChange}>
            {api.GetAllCategories().map(s => (
                <option value={s}>{s}</option>
            ))}
            </select>

            </h4>
            </div>
            </div>
            </div>
    );
    }
}