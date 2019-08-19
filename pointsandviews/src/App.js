import React, { Component,Fragment } from "react";
import Header from "./components/header/";
import PointList from "./components/poiList/";
import FilterControls from "./components/filterControls/";
import api from './dataStore/stubAPI';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import request from "superagent";
import AuthButton from "./components/AuthButton/";
import fakeAuth from "./components/fakeAuth";
import Login from "./components/login/";

class App extends Component {
    // poiType is the area selected by the user, defaults to all
    // search is the varaiable that hold data that the user wished to search by
    state = { search: "", poiType: "all" };


    incrementUpvote = (id) => {
        console.log(" incremt "+id);
        api.upvote3(id) ;
        this.setState({});
    };


    requestComment = (comment,promoter,cursor) => {
        api.addComment(comment,promoter,cursor);
        this.setState({});
    }

    handleChange = (type, value) => {
        type === "name" ? this.setState({ search: value }) : this.setState({ poiType: value });
        console.log(`"handle change " ${value}`);
        this.setState({});
    };



 //   addPointItem = (title, promoter, link) => {
 //       api.add(title, promoter, link);
 //       this.setState({});
 //   };

    deletePoint = (key) => {
        api.deletePoint(key);
        this.setState({});
    };

    addComment = (comment, promoter, cursor) => {
        api.addComment(comment, promoter, cursor);
        this.setState({});
    };


    editPoint = (key,name,lat, long) => {
        api.updatePoint(key,name,lat, long);
        this.setState({});
    };



    render() {
        console.log("in App ");
        console.log(` props location .pathname  this.props.location.pathname`);
        console.log(` props history location state pathname is  this.props.history.location.state`);
        //console.log(this.props);
        //console.log(this.props.history);


        // rather than returning all points, we reduce the number by generating an array of points
        // based on the area Selected by the user.
        let points2 = api.getAllPoints3(this.state.poiType);

        // the user can reduce the number of points, by filtering by name
        let filteredPoints = points2.filter(c => {
            const name = `${c.name} `;
            return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        });

        // the filtered points are sorted, and then these are use in the display
        let sortedPoints = _.sortBy(filteredPoints, c => c.name);

        return fakeAuth.isAuthenticated ? (
            <Fragment>
            <AuthButton/>
            <Header noPoints={sortedPoints.length} />
            <FilterControls onUserInput={this.handleChange}/>
            <PointList points={sortedPoints}
                deleteHandler={this.deletePoint}
                editHandler={this.editPoint}
                upvoteHandler={this.incrementUpvote}
                poiType={this.state.poiType} />
            <div className="row">
            <div className="col-md-6 offset-3">
        </div>
        </div>
        </Fragment>
    ) : (
        <Fragment>
        <AuthButton/>
        <Login/>
        </Fragment>
        );
    };
}
export default App;
