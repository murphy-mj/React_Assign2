import React, { Component, Fragment } from "react";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import NewsForm from "../newsForm";
import api from '../../dataStore/stubAPI'
import PropTypes from "prop-types";
import { BrowserRouter, Route, Redirect, Switch, Link, withRouter} from "react-router-dom";

class Point extends Component {

    handleVote = () => {
        console.log("handleVote   ");
        this.props.upvoteHandler(this.props.point.cursor);
};

  //  handleComment = () => {
  //      console.log("handleComment   ");
  //      this.props.commentHandler(this.props.point.cursor);
  //  }


    static propTypes = {
        lat: PropTypes.number,
        long: PropTypes.string
    }


    state = {
        status: "",
        name: this.props.point.name,
        lat: this.props.point.coordinates.geo.lat,
        long: this.props.point.coordinates.geo.long,
        cursor: this.props.point.cursor,
        upvotes:this.props.point.upvotes,
        previousDetails: {
            name: this.props.point.name,
            lat: this.props.point.coordinates.geo.lat,
            long: this.props.point.coordinates.geo.long,
            cursor:this.props.point.cursor,
            upvotes:this.props.point.upvotes
        }
    };

    handleEdit = () => {
        this.setState({ status: "edit" });
    }


    handleDetail = () => {
        this.setState({status: "detail"});
    }

    handleCancel = () => {
        let { name,lat,long, cursor } = this.state.previousDetails;
        this.setState({ status: "", name, lat, long});
    };

    handleSave = e => {
        e.preventDefault();
        let updatedName = this.state.name.trim();
        let updatedLat = this.state.lat.trim();
        let updatedLong = this.state.long.trim();
     //   let updatedCursor = this.state.Cursor.trim();
        if (!updatedLong || !updatedLat || !updatedName ) {
            return;
        }
        let { name,lat,long} = this.state;
        this.setState({ status: "", previousDetails: { name,lat,long} });
        api.updatePoint(this.state.previousDetails.cursor, updatedName, updatedLat,updatedLong);
    };

    handleNameChange = e => this.setState({ name: e.target.value });
    handleLatChange = e => this.setState({ lat: e.target.value });
    handleLongChange = e => this.setState({ long: e.target.value });
  // handleCursorChange = e => this.setState({ cursor : e.target.value });
    handleDelete = () =>  this.setState({ status : 'del'} );

    handleConfirm = (e) => {
        e.preventDefault();
        console.log(this.state.cursor + " in handleconfirm");
        this.props.deleteHandler(this.state.cursor);
    };


    render() {
      //  console.log("props " + this.props  );
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let leftMostButtonHandler = this.handleDetail;
        let cardColor = "bg-white";

        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleSave;
        } else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        } else if (this.state.status === 'detail' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.comment;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
            leftMostButtonHandler = this.handleDetail;
        };


   return (
       <div className="col-sm-3">
       <div className="card">
       <div className="card-body">
            <h5 className="card-title ">
            {`${this.props.point.name} ${
                this.props.point.safeName
                }`}
            </h5>

        {this.state.status === "edit" ? (
        <Fragment >
            < p >
            < input
            type = "text"
            className = "form-control"
            value = {this.state.name}
            onChange = {this.handleNameChange}/>
            < /p>

            < p >
            < input
            type = "text"
            className = "form-control"
            value = {this.state.lat}
            onChange = {this.handleLatChange}/>
            < /p>

            < p >
            <input
            type = "text"
            className = "form-control"
            value = {this.state.long}
            onChange = {this.handleLongChange}/>
            </p>

            <p>
            <input
            type = "text"
            className = "form-control"
            value = {this.state.cursor} readOnly / >
            </p>

            </Fragment>
        ):(
        <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            {` ${this.props.point.upvotes}`}
        </span>

        <p>
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <span> {this.props.point.name}</span>
        </p>

        <p>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {this.props.point.coordinates.geo.lat} </span>
        </p>

        <p>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {this.props.point.coordinates.geo.long} </span>
        </p>
            <BrowserRouter>
        <switch>
        <Link to={{
            pathname:`point/${this.props.point.cursor}`,
                state:{
                testa:`${this.props.poiType}`,
                prevmenu: `point/${this.props.point.cursor}`
            }
        }}>
        <p>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {this.props.point.cursor} </span>
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
            <span>{`point/${this.props.point.cursor}/comment`}</span>
            <FontAwesomeIcon icon={["fas", "phone"]} />
            </p>
        </Link>
     </switch>
            </BrowserRouter>

        </Fragment>
    )}
    </div>

        <div className="card-footer">

        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="..." >

            <button
        type="button"
        className={"btn w-100 " + activeButtons.leftButtonColor}
        onClick={leftButtonHandler}>
            {activeButtons.leftButtonVal}
            </button>

            <button
        type="button"
        className={"btn w-100 " + activeButtons.rightButtonColor}
        onClick={rightButtonHandler} >
            {activeButtons.rightButtonVal}
            </button>

            <button
        type="button"
        className={"btn w-100 " + activeButtons.leftMostButtonColor}
        onClick={leftMostButtonHandler} >
            {activeButtons.leftMostButtonVal}
            </button>

       </div>
       </div>

       </div>
       </div>
    );
    }
}
export default Point;