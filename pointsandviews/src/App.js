import React, { Component,Fragment } from "react";
import Header from "./components/header/";
import PointList from "./components/poiList/";
import FilterControls from "./components/filterControls/";
import PointItemList from "./components/pointItemList/";
import Form from "./components/pointForm/";
import api from './dataStore/stubAPI';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import request from "superagent";
import NewsForm from "./components/newsForm/";
import AuthButton from "./components/AuthButton/";

class App extends Component {

    state = { search: "", poiType: "all" };


    incrementUpvote = (id) => {
        console.log(" incremt "+id);
        api.upvote3(id) ;
        this.setState({});
    };


    requestComment = (comment,promoter,cursor) => {
        console.log(" request comment "+comment+" "+cursor);
        api.addComment(comment,promoter,cursor);
        this.setState({});
    }

    handleChange = (type, value) => {
        type === "name" ? this.setState({ search: value }) : this.setState({ poiType: value });
        console.log(`"handle change " ${value}`);
        this.setState({});
    };



    addPointItem = (title, promoter, link) => {
        api.add(title, promoter, link);
        this.setState({});
    };

    deletePoint = (key) => {
        console.log("in del in app, my cursor is "+key);
        api.deletePoint(key);
        this.setState({});
    };

    addComment = (comment, promoter, cursor) => {
        api.addComment(comment, promoter, cursor);
        this.setState({});
    };

    incrementUpvote2 = (id) => {
        api.upvote(id) ;
        this.setState({});
    };

    editPoint = (comment, promoter, cursor) => {
        api.addComment(comment, promoter, cursor);
        this.setState({});
    };




    render() {
        console.log("in App looking at prpss");
        console.log(" props location .pathname "+ this.props.location.pathname);
        console.log(" props history location state pathname is  "+ this.props.history.location.state);
        console.log(this.props);
        console.log(this.props.history);

      //  let poiTypeVar ='all';
        // let testPosts =  api.getAll();
        console.log("  location Pathname and history location from App");
        console.log(this.props.location.pathname);
        console.log(" stop");
        console.log(this.props.history.location.state);


     //   if( this.props.history.location.state === undefined) {
     //       console.log("history state is undefined ");
     //       poiTypeVar = this.state.poiType;
     //   } else{
     //       let {testa} = this.props.history.location.state;
     //       console.log("history state is not undefined ");
     //       console.log(`${testa}`);
     //       poiTypeVar = `${testa}`;
     //       let {prevmenu} = this.props.history.location.state;
     //       console.log(`${prevmenu}`);

     //   };
     //   console.log(`"poi typr var = " + ${poiTypeVar}`)
     //  const {prevmenu} = this.props.history.location.state;
    //    const {testa} =    this.props.history.location.state;
      //  console.log(`${pathname} " current pathname"`);
        console.log("in app js - one");
          //  const {testa} = this.props.history.location.state;
  //          ({testa}) ? (
  //             console.log("what the poi Type prop " + this.props.history.location.state.testa)
  //         ):(
  //             console.log("what the poi Type prop not exist ")
  //         );
        //   console.log(`"what the prev menu prop " + ${prevmenu}`);
        let testPosts = _.sortBy(api.getAll(), post => -post.upvotes);
        let contacts = api.getAllContacts();
       let points2 = api.getAllPoints3(this.state.poiType);
      //  let points2 = api.getAllPoints3(`${poiTypeVar}`);
        //   points2.map(c => {
        //       console.log(c.name +" haha");
        //   });

        console.log("back in app js");
        console.log(points2.length + " length of p2");
        console.log("render in Apps");
        //  console.log(api.getAllPoints1(this.state.poiType));
        //  points2[0].map(c => {
        //      console.log(c.cursor);
        //  });
        console.log("render in Apps2");

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


        console.log("render in Apps sorted Points ");
        // sortedPoints.map(c => {
        //     console.log(c.cursor);
        // });

        // commentHandler={this.requestComment}
        //    console.log("admin ? " +this.props.location);
        return (
            <Fragment>
            <AuthButton/>
            <Header noPoints={sortedPoints.length} />
            <FilterControls onUserInput={this.handleChange}/>
            <PointList points={sortedPoints} deleteHandler={this.deletePoint}  upvoteHandler={this.incrementUpvote} poiType={this.state.poiType} />
            <div className="row">
            <div className="col-md-6 offset-3">
            <h1><a href="/">Point of Interest News</a></h1>
        </div>
        </div>

        </Fragment>
    );
    }
}

export default App;
