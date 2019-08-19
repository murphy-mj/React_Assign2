import React, { Component, Fragment } from 'react';
import './newsItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewsItem extends Component {
   // this is the comment object, which has the option to vote on individual comments
    handleCVote = () =>  { this.props.upvoteCommentHandler(this.props.post.id);};

    render() {

        return (
            <Fragment>
            <span className="cur_vote" onClick={this.handleCVote}>
            {` ${this.props.post.upvotes}   current vote`}
            <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="1x" />
            </span>
            <p className="comment">
            {this.props.post.comment} **author: {this.props.post.promoter}
            </p>
            </Fragment>
    );
    }
}
export default NewsItem;