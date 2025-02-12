import _ from "lodash";
import PointItem from "../components/pointItem/";
import React, { Component, Fragment } from 'react';
import request from "superagent";
const jsonResponse = require('./all.json');

class StubAPI {
    constructor() {
        this.pointComments2 = [
            {
                id: 1,
                comment: "Why You Can No Longer Get Lost in the Crowd",
                author: "Woodrow Hartzog",
                cusror:2940
            },
            {
                id: 2,
                title: "Samsung's folding phone breaks for reviewers",
                author: "Dave Lee",
                cusror:523
            }];


            this.posts = [
            {
                id: 3,
                title:
                    "Microsoft turned down facial-recognition sales on human rights concerns",
                link: null,
                author: "Joseph Mennn",
                comments: [],
                cursor:6243,
                upvotes: 12
            },
            {
                id: 4,
                title:
                    "Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles",
                link: "https://possiblywrong.wordpress.com/",
                author: "unknown",
                comments: [],
                cursor:5394,
                upvotes: 2
            },
            {
                id: 5,
                title: "THE COMING DESERT",
                link:
                    "https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert",
                author: "MIKE DAVIS",
                comments: [],
                cursor:2940,
                upvotes: 8
            },
            {
                id: 6,
                title: "Sleep myths 'damaging your health'",
                link: "https://www.bbc.com/news/health-47937405",
                author: "James Gallagher",
                comments: [],
                cursor:2940,
                upvotes: 10
            },
            {
                id: 7,
                title: "Planet’s ocean-plastics problem detailed in 60-year data set",
                link: "https://www.nature.com/articles/d41586-019-01252-0",
                author: "Matthew Warren",
                comments: [],
                cursor:523,
                upvotes: 20
            }
        ];

        this.postPoints = [
            {
                id: 1,
                title: "Why You Can No Longer Get Lost in the Crowd",
                author: "Woodrow Hartzog",
                cursor:2940,
                upvotes: 10
            },
            {
                id: 2,
                title: "Samsung's folding phone breaks for reviewers",
                author: "Dave Lee",
                cursor:523,
                upvotes: 14
            }];


        this.points =[];
        this.points1 =[];
        this.pointsP = [];
   //     this.contacts = [];
        this.points2 =[];
        this.pointsComments = [];
        this.category = ["all"];
        this.category1 = ["all"];
    }

    getAll() {
        return this.posts;
    }

    getAllPoints() {
        return this.points;
    }


    getAllPoints1(poiType) {
        //const points1 =[];
      //  request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
      //      if (res) {
                let results = jsonResponse;
      //          let results = JSON.parse(res.text);
                console.log("get All with PoiTpe");
                console.log(poiType);
                let index= 0;
                // let points = [];
                if (poiType == "all") {
                    index = 0;
                } else {
                    index = _.findIndex(results, result => result.title == poiType);
                    console.log(index +" <-   index");
                };
                console.log(results[index]);
                console.log(results[index].pois[0].costalZone);
                //initializePoints3(results);
                if (poiType == "all"){
                    for (var i=0; i<results.length; i++) {
                        this.points1.push(results[i].pois);
                    }
                } else {
                    this.points1 = results[index].pois;
                };
                console.log(this.points1[0] +" pois first");

        return this.points1;
    }


    getAllPoints2(poiType) {
        this.points1 = [];
        let results = jsonResponse;
      //  request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
      //      if (res) {
     //           let results = JSON.parse(res.text);
                console.log("get All with PoiTpe2");
              //  console.log(poiType);
                //let index= 0;
                // let points = [];
                //console.log(results[index]);
                //console.log(results[index].pois[0].costalZone);
                //initializePoints3(results);

                if (poiType == "all") {
                  for (var i=0; i<results.length; i++) {
                    for (var b = 0; b < results[i].pois.length; b++) {
                        this.points1.push(results[i].pois[b])
                    }
                  }
                } else {
                    let index =-1;
                    for (var i=0; i<results.length; i++) {
                        index = _.findIndex(results[i], result => result.title == poiType);
                        if(index != -1) break;
                    }
                    for (var i=0; i<results.length; i++) {
                        console.log(results[i].title +" title ?");

                    }
                    
                    console.log("index is "+ index);
                   this.points1 = results[index].pois;
                 //   this.points1.push(results[i].pois);
                }

        console.log(this.points1 + "ret points one");

        return this.points1;
    }


    /* this is used in the Filter Component to list the areas that the points are categorized by
       NORTH WEST, SOUTH etc
     */
    GetAllCategories(){
        return this.category;
    }



    addComment(comment, promoter, cursor) {
        console.log("point number " + cursor);
        let point = this.getPoint(cursor);
        console.log("point name " + point.name);
        let id = 1;
        let last = _.last(point.comments);
        if (last) {
            id = last.id + 1;
        }
        point.comments.push({ id: id, comment: comment, promoter: promoter, upvotes: 0 });
        let len = point.comments.length -1;
        console.log("Comment is " + point.comments[len].comment);
    }



    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
            this.posts[index].upvotes += 1;
            return true;
        }
        return false;
    }

    upvote2(id) {
        let index = _.findIndex(this.postPoints, post => post.id === id);
        if (index !== -1) {
            this.postPoints[index].upvotes += 1;
            return true;
        }
        return false;
}


/* this is used in app.js, to increment the vote for the point
 as the points are stored in different arrays based on areas (poiType) indexA is the index of the Array
 once we have the array, we can serach that arry to find the location within  the arayy of the point, index.
 as points1 array hold all the points,and these points have the extented prperties, this is used.
 */
    upvote3(id) {
        let indexA = this.getIndex(id);
        let indexB = _.findIndex(this.points1[indexA].pois, point => point.cursor == id);
        if (indexB !== -1) {
            this.points1[indexA].pois[indexB].upvotes += 1;
            return true;
        }
        return false;
    }

    upvoteComment2(Pointid, CommentId) {
        console.log("upvoteComment ");
        let index = _.findIndex(this.points, point => point.cursor == Pointid);
        let P = this.points[index];
        let indexC = _.findIndex(P.comments, comment => comment.id == CommentId );
       // console.log("upvoteComment "+this.points[index].comments[indexc].upvotes);
        if (index !== -1) {
            this.points[index].comments[indexC].upvotes += 1;
            return true;
        }
        return false;
    }

    /*this is used, returns the index of the Array that holds the point, p, which is an id(cursor) */

    getIndex(p) {
        let index = -1;
        for (var i=0; i<this.points1.length; i++) {
            for (var b = 0; b < this.points1[i].pois.length; b++) {
                if (this.points1[i].pois[b].cursor == p) {
                    index = i
                }
                if (index != -1) break;
            }
            if (index != -1) break;
        }
        return index;
    }




    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }


    /* this is used to return the point object based on the point id(cursor)
     as the points are stored in different arrays based on areas (poiType) indexA is the index of the Array
     once we have the array, we can serach that arry to find the location within  the arayy of the point, index.
     as long as the id if found within the array, we can return the point object
     points1 is the array of all points which have extended properties */

    getPoint(id) {
        let indexA = this.getIndex(id);
        let index = _.findIndex(this.points1[indexA].pois, point => point.cursor == id);
        let result = index !== -1 ? this.points1[indexA].pois[index] : null;
        return result;
    }



    getComments(id){
        let index = _.findIndex(
            this.points,
            point => `${point.cursor}` === id
        );
        if (index !== -1) {
            let p = this.points[index];
            return p.comments
        }
        return null;
    }





    deleteComment(p,k) {
        let elements = _.remove(this.comments, comment => comment.id === k);
        return elements;
    }



// points are stored in arrays based on the gerographical areas
// wehen we are given the id of a point to remove, its necessay to locate the array that it is stored in.
// rather than having the function too big, this implementation is done through getIndex(k)

    deletePoint(k) {
        let elements2 = {};
        let index = this.getIndex(k);
        console.log("in del point and index of k is " +index)
         //for (var i = 0; i < this.points1[index].pois.length; i++) {
           // for (var b = 0; b < this.points1[index].length; b++) {
                // this.pointsP.push(this.points1[index].pois[i]);
        console.log(this.points1[2].pois);
        // returns the element deleted
                elements2 = _.remove(this.points1[index].pois, point => point.cursor === k);
               // this.points1[index].pois =elements2;

           // }
       // }
       // let elements = _.remove(this.pointsP, point => point.cursor === k);
            console.log(elements2.name +" Just deleted you")
        console.log("between elelmts2 and new points1");
        this.points1[index].pois.map((c) =>(
            console.log(c.name)
        ));
        return elements2;
    }






/* used in  index.js file, here we take in array of points, and as we go through each point in the Array,
   we add 2 additional properties to each point, an array to hold comments and an upvote property, with a default value of 1.
   pointsIn this is the json data fron the API.
   points array, holds all the points with additional properties
   the list of areas is extracted and placed in an array called categories, used for the select list in header Filter


   */
    initializePoints3(pointsIn) {
        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
        this.points = items;
        //console.log("inside initilaizeP categ points");
       // pointsIn.map((categ) =>(
       //     console.log(categ.title)
       // ));

        let cat = [];
        pointsIn.map((categ) =>(
        this.category.push(categ.title)
        ));

        pointsIn.map((categ) =>(
        this.points1.push(categ)
    ));
        this.points2 = [];
        for (var i=0; i<this.points1.length; i++) {
            let items = this.points1[i].pois.map((point) =>({...point,['comments']:[],['upvotes']:1}));
            this.points1[i].pois = items;
            for (var b = 0; b < this.points1[i].pois.length; b++) {
                this.points2.push(this.points1[i].pois[b])
            }
        }
    }



 // used in App.js
    // returning an array of points based on the area selected by user (poiType)
    getAllPoints3(poiType) {

                if (poiType == "all") {
                    this.pointsP = [];
                    for (var c = 0; c <this.points2.length; c++) {
                        this.pointsP.push(this.points2[c])
                    }
                } else {
                    let index = -1;
                    for (var i = 0; i < this.points1.length; i++) {
                        console.log(this.points1[i].title +" points title "  + poiType);
                        if(this.points1[i].title === poiType){
                            index = i
                        }
                        if (index != -1) break;
                    }

                    console.log("index is " + index);
                    if(index != -1) {
                        this.pointsP = [];
                        for (var i = 0; i < this.points1[index].pois.length; i++) {
                            this.pointsP.push(this.points1[index].pois[i]);
                        }
                    }
                }
        return this.pointsP;
}



    updatePoint(key,name,lat, long) {
        let index1 = this.getIndex(key);
        console.log("inside updatepoint ");
        console.log({index1});
        console.log(`"lat and long "${key}${lat}${long}${name}`);

        let index = _.findIndex(this.points[index1].pois, point => point.cursor == key);
        console.log({index});
        if (index !== -1) {

            this.points[index1].pois[index].name = name;
         //   this.points[index1].pois[index].safeName = name;
            this.points[index1].pois[index].coordinates.geo.lat = lat;
            this.points[index1].pois[index].coordinates.geo.long = long;
            console.log(this.points[index1].pois[index]);
            console.log(this.points[index1].pois[index].name);
            return true;
        }
        return false;
    }




  //  addComment(postId, c, n) {
  //      let post = this.getPost(postId);
   //     let id = 1;
  //      let last = _.last(post.comments);
  //      if (last) {
 //           id = last.id + 1;
 //       }
 //       post.comments.push({ id: id, comment: c, promoter: n, upvotes: 0 });
 //   }





 //   upvoteComment(postId, commentId) {
 //       let post = this.getPost(postId);
 //       let index = _.findIndex(post.comments, c => c.id === commentId);
 //       if (index !== -1) {
 //           post.comments[index].upvotes += 1;
 //       }
 //   }


    upvoteComment2(pointId, commentId) {
    let point = this.getPoint(pointId);
    let index = _.findIndex(point.comments, c => c.id === commentId);
    if (index !== -1) {
        point.comments[index].upvotes += 1;
    }
}



//   getAllContacts() {
//        return this.contacts;
//    }



    //   add(title, author, link,cursor) {
    //       let id = 1;
    //       let last = _.last(this.posts);
    //       if (last) {
//            id = last.id + 1;
//        }
//        let len = this.posts.length;
//        let newLen = this.posts.push({
//            id,
//            title,
//            author,
//            link,
//            comments: [],
//            cursor,
//            upvotes: 0
//        });
//        return newLen > len;
//    }

    //   addPointPost(title, promoter,cursor) {
    //       let id = 1;
    //       let last = _.last(this.postPoints);
    //       if (last) {
    //           id = last.id + 1;
    //       }
    //       let len = this.postPoints.length;
    //       let newLen = this.postPoints.push({
    //           id,
    //           title,
    //  /         promoter,
    //           cursor,
    //           upvotes: 0
    //       });
    //       return newLen > len;
    //   }






}

export default new StubAPI();