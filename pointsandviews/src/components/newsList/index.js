import React, { Component,Fragment } from 'react';
import NewsItem from '../newsItem/';
import api from '../../dataStore/stubAPI';
import _ from "lodash";


export default class NewsList extends Component {

 // this method being passed a prop to the Newstem/Comment component

    upvoteCommentHandler = (CommentId) => {
        api.upvoteComment2(this.props.point.cursor, CommentId);
        this.setState({});
    };



    render() {
        let items = {};
        {this.props.posts[0] ? (
          // items = this.props.posts.map((post, index) => (
          // created a array of news items sorted bt upvotes
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
            <h4>List of comments, ordered by popularity </h4>
            {items}
            </Fragment>
    ) :(
        <p> Sorry no comments have been added as yet</p>
        )}
        </Fragment>
    )
    }
}