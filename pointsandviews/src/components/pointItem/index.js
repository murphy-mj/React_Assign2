import React, { Component, Fragment } from 'react';
import './pointItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PointItem extends Component {

    handleVote = () =>  this.props.upvoteHandler(this.props.point.cursor);

    handleComment = () =>  this.props.commentHandler(this.props.point.cursor,);


    render() {
         console.log("IS THIS ANOTHER NOT USED, POINTITEM ?");
        return (
            <Fragment>

            <span className="ptr"  onClick={this.handleVote}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            </span>


            <span>
            <a href="/">Comments</a>
            </span>

            </Fragment>
    );
    }
}
