import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import buttons from "../../config/buttonsConfig";
//import NewsForm from "../newsForm";
//import api from '../../dataStore/stubAPI';
import PropTypes from "prop-types";
//import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


class PointView extends Component {

    handleVote = () => {
      //  console.log("handleVote   ");
        this.props.upvoteHandler(this.props.point.cursor);
    };


    static propTypes = {
        lat: PropTypes.number,
        long: PropTypes.number
    };


    state = {
        status: ""
    };

    render() {

        console.log("Point of Interest Views, for restricted views");

        return (
            <div className="col-sm-3">
            <div className="card">
            <div className="card-body">

            <h5 className="card-title "> {`${this.props.point.name} `}</h5>
        <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
            <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="1x" />
            {`Current Votes ${this.props.point.upvotes}`}
        </span>

        <Link to={{
            pathname:`point/${this.props.point.cursor}`,
            state:{
                testa:`${this.props.poiType}`,
                prevmenu: `point/${this.props.point.cursor}`
            }
        }}>
        <p>
        <FontAwesomeIcon icon={["fas", "star"]} size="1x" />
        <span>Lets see some detail </span>
        </p>
        </Link>

        <Link to= {{
            pathname:`point/${this.props.point.cursor}/comment`,
                state:{
                testa:`${this.props.poiType}`,
                prevmenu: `point/${this.props.point.cursor}`
            }
        }}>

        <p>
        <FontAwesomeIcon icon={["fas", "comments"]} size="1x" />
        <span>Lets add a comment</span>
        </p>
        </Link>
        </Fragment>
        }
    </div>
        </div>
        </div>
    );
    }
}
export default PointView;