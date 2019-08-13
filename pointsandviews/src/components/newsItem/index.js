import React, { Component, Fragment } from 'react';
import './newsItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Point from "../pointofinterest";

class NewsItem extends Component {

    handleCVote = () =>  { this.props.upvoteCommentHandler(this.props.post.id);};

    render() {
        console.log("post id "+ this.props.post.id);
// might use in top 5 places?

    //let line = this.props.post.link ? (
    //        <a href={this.props.post.link}>{this.props.post.comment}</a>
    //) : (
    //    <span>{this.props.post.comment}</span>
    //);
        return (
            <Fragment>
            <span className="ptr" onClick={this.handleCVote}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
          //  <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
            {` ${this.props.post.upvotes}`} + " presen votes"
    </span>
        <span className="newsitem">
            <span>
            <p className="comment">{this.props.post.comment}</p>
            //<a href="/">Comments</a>
            </span>
            </span>
            <p className="author">{this.props.post.promoter}</p>

            </Fragment>
    );
    }
}
export default NewsItem;