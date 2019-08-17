import React, { Component,Fragment } from "react";
import Header from "../header";
import PointList from "../poiList/";
import FilterControls from "../filterControls/";
import PointItemList from "..//pointItemList/";
import Form from "../pointForm/";
import api from '../../dataStore/stubAPI';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import request from "superagent";
import NewsForm from "../newsForm/";
import AuthButton from "../AuthButton/";

class Admin extends Component {

    state = { search: "", poiType: "all" };


    incrementUpvote = (id) => {
        console.log(" incremt "+id);
        api.upvote3(id) ;
        this.setState({});
    };


    requestComment = (comment,promoter,cursor) => {
        console.log(" request comment "+comment+" "+cursor);
        api.addComment(comment,promoter,cursor);

    }

    handleChange = (type, value) => {
        type === "name" ? this.setState({ search: value }) : this.setState({ poiType: value });
    };



    addPointItem = (title, promoter, link) => {
        api.add(title, promoter, link);
        this.setState({});
    };


    deletePoint = (key) => {
        console.log("in del in Admin, my cursor is "+key);
        api.deletePoint(key);
        this.setState({});
    };

    addComment = (comment, promoter, cursor) => {
        api.addComment(comment, promoter, cursor);
        this.setState({});
    };

    deleteComment = (cursor, key) => {
        console.log("in del in admin, my cursor is "+key);
        api.deleteComment(cursor, key);
        this.setState({});
    };


    editPoint = (comment, promoter, cursor) => {
        api.addComment(comment, promoter, cursor);
        this.setState({});
    };




    render() {
        // let testPosts =  api.getAll();
        console.log("in admin js - one")
        let testPosts = _.sortBy(api.getAll(), post => -post.upvotes);
        let contacts = api.getAllContacts();
        let points2 = api.getAllPoints3(this.state.poiType);
        //   points2.map(c => {
        //       console.log(c.name +" haha");
        //   });

        console.log("back in admin js");
        console.log(points2.length + " length of p2");
        console.log("render in Admin");
        //  console.log(api.getAllPoints1(this.state.poiType));
        //  points2[0].map(c => {
        //      console.log(c.cursor);
        //  });

        let filteredPoints = points2.filter(c => {
            //const name = `${c[0].name} `;
            const name = `${c.name} `;
            // console.log(c[0].name)
            return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        });

        // filteredPoints =
        //     this.state.poiType === "all"
        //         ? filteredPoints
        //         : filteredPoints.filter(c => c.poiType === this.state.poiType);

        let sortedPoints = _.sortBy(filteredPoints, c => c.name);


        console.log("render in Apdmin sorted Points ");
        // sortedPoints.map(c => {
        //     console.log(c.cursor);
        // });

        // commentHandler={this.requestComment}
        console.log("admin ? " +this.props.location);
        return (
            <Fragment>
           <AuthButton/>
           <Header noPoints={sortedPoints.length} />
           <FilterControls onUserInput={this.handleChange}/>
           <PointList points={sortedPoints} deleteHandler={this.deletePoint}  upvoteHandler={this.incrementUpvote} />
           <div className="row">
            <div className="col-md-6 offset-3">
            <h1><a href="/">Admin working page</a></h1>
           </div>
        </div>
        </Fragment>
    );
    }
}

export default Admin;