import React, { Component,Fragment } from 'react';
import NewsItem from '../newsItem/';
import api from '../../dataStore/stubAPI';
import _ from "lodash";


export default class NewsList extends Component {

   // let  srtPosts[];
   // srtPosts = _.sortBy(this.props.posts, post => -post.upvotes);

    upvoteCommentHandler = (CommentId) => {
        console.log(" in News List upVoteComment handler, point is " +this.props.point.cursor)
        api.upvoteComment2(this.props.point.cursor, CommentId);
        this.setState({});
    };



    render() {
        let items = {};
        {this.props.posts[0] ? (
          // items = this.props.posts.map((post, index) => (
          // created a array of news items soerted bt upvotes
           items = _.sortBy(this.props.posts, post => -post.upvotes).map((post, index) => (
            < NewsItem key = {index} post = {post} upvoteCommentHandler = {this.upvoteCommentHandler} />
           ))
        )  : (
          items = {}
        ) }
        return (
            <Fragment>
            {items[0] ? (
            < Fragment >
            <p> News List</p>
            {items}
            </Fragment>
    ) :(
        <p> I am afraid NO News List</p>
        )}
        </Fragment>
    )
    }
}