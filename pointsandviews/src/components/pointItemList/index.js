import React, { Component,Fragment } from 'react';
import PointItem from '../pointItem/';
import Point from "../pointofinterest";
import './pointItemList.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class PointItemList extends Component {
    render() {
        let items = this.props.posts.map((post,index) =>
            (<PointItem key={post.id} post={post}  upvoteHandler={this.props.upvoteHandler} /> )
    )
        return (
            <Fragment>
            {items}
            </Fragment>
    );
    }
}