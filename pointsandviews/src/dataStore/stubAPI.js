import _ from "lodash";
import PointItem from "../components/pointItem/";
import React, { Component, Fragment } from 'react';
import request from "superagent";

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
                cusror:6243,
                upvotes: 12
            },
            {
                id: 4,
                title:
                    "Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles",
                link: "https://possiblywrong.wordpress.com/",
                author: "unknown",
                comments: [],
                cusror:5394,
                upvotes: 2
            },
            {
                id: 5,
                title: "THE COMING DESERT",
                link:
                    "https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert",
                author: "MIKE DAVIS",
                comments: [],
                cusror:2940,
                upvotes: 8
            },
            {
                id: 6,
                title: "Sleep myths 'damaging your health'",
                link: "https://www.bbc.com/news/health-47937405",
                author: "James Gallagher",
                comments: [],
                cusror:2940,
                upvotes: 10
            },
            {
                id: 7,
                title: "Planet’s ocean-plastics problem detailed in 60-year data set",
                link: "https://www.nature.com/articles/d41586-019-01252-0",
                author: "Matthew Warren",
                comments: [],
                cusror:523,
                upvotes: 20
            }
        ];

        this.postPoints = [
            {
                id: 1,
                title: "Why You Can No Longer Get Lost in the Crowd",
                author: "Woodrow Hartzog",
                cusror:2940,
                upvotes: 10
            },
            {
                id: 2,
                title: "Samsung's folding phone breaks for reviewers",
                author: "Dave Lee",
                cusror:523,
                upvotes: 14
            }];


        this.points =[];
        this.points1 =[];
        this.pointsP = [];
        this.contacts = [];
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
        request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
            if (res) {
                let results = JSON.parse(res.text);
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
                //  console.log(this.points1[0][0].cursor +" cursor");
                // api.initializePoints(results[index].pois);
                //   api.initializePoints2(results[0].pois);
                // this.setState({});
            } else {
                console.log(error);
                console.log("issue with results");
            }
        });
        //  console.log(points1[0][0].cursor + "2nd array first obj");

        return this.points1;
    }


    getAllPoints2(poiType) {
        this.points1 = [];
        request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
            if (res) {
                let results = JSON.parse(res.text);
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


            //    this.points1.map(c => {
            //        console.log(c.name +" haha2");
            //    });

                //  console.log(this.points1[0][0].cursor +" cursor");
                // api.initializePoints(results[index].pois);
                //   api.initializePoints2(results[0].pois);
                // this.setState({});
            } else {
                console.log(error);
                console.log("issue with results");
            }
        });
        console.log(this.points1 + "ret points one");

        return this.points1;
    }

    GetAllCategories(){
        return this.category;
    }

    getAllContacts() {
        return this.contacts;
    }



    add(title, author, link,cursor) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
            id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
            id,
            title,
            author,
            link,
            comments: [],
            cursor,
            upvotes: 0
        });
        return newLen > len;
    }

    addPointPost(title, promoter,cursor) {
        let id = 1;
        let last = _.last(this.postPoints);
        if (last) {
            id = last.id + 1;
        }
        let len = this.postPoints.length;
        let newLen = this.postPoints.push({
            id,
            title,
            promoter,
            cursor,
            upvotes: 0
        });
        return newLen > len;
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





    addContact(){

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


// this is used in app.js
    upvote3(id) {
        let indexA = this.getIndex(id);
        console.log("upvot3 ");
      //  let index = _.findIndex(this.pointsP, point => point.cursor == id);
        let indexB = _.findIndex(this.points1[indexA].pois, point => point.cursor == id);
        console.log("upvot3 "+this.points1[indexA].pois[indexB].upvotes);
        if (indexB !== -1) {
        //    this.pointsP[index].upvotes += 1;
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

    //this is used, returns the index of the Array that holds the point

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


    // this is used
    getPoint(id) {
        console.log("get Points "+ id);
      // this.points.map((point,index) => console.log(point.cursor));
        let indexA = this.getIndex(id);
        let index = _.findIndex(this.points1[indexA].pois, point => point.cursor == id);
        console.log("post get Points, point index"+ index)
        let result = index !== -1 ? this.points1[indexA].pois[index] : null;
       console.log("inside getPoint result name is "+ result.name)
        return result;
    }

    getPointOriginal(id) {
        console.log("get Points"+ id);
        this.points.map((point,index) => console.log(point.cursor));

        let index = _.findIndex(this.points, point => point.cursor == id);
        console.log("post get Points, point index"+ index)
        let result = index !== -1 ? this.points[index] : null;
        // console.log("inside getPoint index is "+ index)
        return result;
    }






   // let items = points.map((point,index) =>
   //     (<PointItem key={index} point={point}/> ))



    getPoint2(id) {
        console.log(this.points);
        let index = _.findIndex(this.points, point => point.cursor == id);
        let result = index !== -1 ? this.points[index] : null;
        console.log("inside getPoint index is "+ index)
        return result;
    }




    getContact(id){
        let index = _.findIndex(
            this.contacts,
            contact => `${contact.phone}${contact.cell}` === id
        );
        if (index !== -1) {
            return this.contacts[index];
        }
        return null;
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







    deleteContact(k) {
        let elements = _.remove(this.contacts, contact => contact.phone === k);
        return elements;
    }

    deleteComment(p,k) {

        let elements = _.remove(this.comments, comment => comment.id === k);
        return elements;
    }


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



    initializeContacts(contacts) {
        this.contacts = contacts;
    }

    initializePoints(pointsIn) {
        console.log("inside initilaizeP");
// adding additional properties,upvotes and comments to the initial data
        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
        this.points = items;
        console.log(this.points);
        console.log(this.points[1].name);
        console.log(this.points[1].upvotes);
    }

// used in  app.js
    initializePoints3(pointsIn) {

        let items = pointsIn.map((point) =>({...point,['comments']:[],['upvotes']:1}));
        this.points = items;

        console.log("inside initilaizeP categ");
        this.category.map((categ) =>(
            console.log(categ)
        ));

        console.log("inside initilaizeP categ points");
        pointsIn.map((categ) =>(
            console.log(categ.title)
        ));

        let cat = [];
        pointsIn.map((categ) =>(
            //   point.title));
        this.category.push(categ.title)
        ));

        pointsIn.map((categ) =>(
        this.points1.push(categ)
    ));



        this.category.map((categ) =>(
            console.log(categ + "is this title")
        ));

        this.points2 = [];
        for (var i=0; i<this.points1.length; i++) {
            let items = this.points1[i].pois.map((point) =>({...point,['comments']:[],['upvotes']:1}));
            this.points1[i].pois = items;
            for (var b = 0; b < this.points1[i].pois.length; b++) {
                this.points2.push(this.points1[i].pois[b])
            }
        }
        // this.category = cat;
    }

 // used in App.js
    getAllPoints3(poiType) {

                if (poiType == "all") {
                    this.pointsP = [];

                  //  for (var i=0; i<this.points1.length; i++) {
                  //      for (var b = 0; b < this.points1[i].pois.length; b++) {
                  //          this.pointsP.push(this.points1[i].pois[b])
                  //      }
                  //  }

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

                //    this.points1.map(c => {
                //        console.log(c.name +" haha2");
                //    });

                //  console.log(this.points1[0][0].cursor +" cursor");
                // api.initializePoints(results[index].pois);
                //   api.initializePoints2(results[0].pois);
                // this.setState({});
           // } else {
           //     console.log(error);
           //     console.log("issue with results");
          //  }
      // console.log(this.pointsP + "ret points one");

        return this.pointsP;
}










    initializePoints2(points) {
        console.log("inside initilaizeP2");
        //console.log(points);
        let items = points.map((point,index) =>
            (<PointItem key={index} point={point}/> ))
        this.points2 = items;

    }


    updateContact(key, email, phone) {
        let index = _.findIndex(this.contacts, contact => contact.phone === key);
        if (index !== -1) {
            this.contacts[index].phone = phone;
            this.contacts[index].email = email;
            return true;
        }
        return false;
    }

    updatePoint(key,name,lat, long) {
        let index = _.findIndex(this.points, point => point.cursor === key);
        if (index !== -1) {
            this.points[index].name = name;
            this.points[index].coordinates.geo.lat = lat;
            this.points[index].coordinates.geo.long = long;
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





    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
            post.comments[index].upvotes += 1;
        }
    }


    upvoteComment2(pointId, commentId) {
    let point = this.getPoint(pointId);
    let index = _.findIndex(point.comments, c => c.id === commentId);
    if (index !== -1) {
        point.comments[index].upvotes += 1;
    }
}

}


export default new StubAPI();