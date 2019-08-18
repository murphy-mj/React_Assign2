import React, { Component,Fragment } from 'react';
import './newsForm.css';
import {withRouter,Route,Redirect} from "react-router-dom";
import api from "../../dataStore/stubAPI";
import { Link } from "react-router-dom";


class NewsForm extends Component {
    // the news form is the form to enter a comment about the point of interest
    // you are allowed to enter the comment and the name of the person
    // the point id is read only

    constructor(props) {
        super(props);
        this.state = {comment: 'default comment', promoter: 'promoter', cursor: this.props.match.params.id};
    };

     handleCommentChange = (e) => this.setState({comment: e.target.value});
     handlePromoterChange = (e) =>  this.setState({promoter: e.target.value});

     handleSubmit = (e) => {
         e.preventDefault();
         api.addComment( this.state.comment, this.state.promoter, this.state.cursor);
         this.setState({ comment: '', promoter:''})
     };



    render() {
        // these are info purposes only in case required  for additional reporting
        // these prior url and the point area poiType eg Noth West
        const {testa,prevmenu} = this.props.location.state;
        console.log(`${this.props.match.params.id}` +"param id");
        console.log(" additionl props 2" + `${testa}`);
        console.log(" additionl props 2 prev menu " + `${prevmenu}`);

         // the link to return to comment, just return the app to its Public page, which has its list of commens and Map
        // the pathname will route the app back to its PointPage
        // the additional state will not be presently used

        return (
            <Fragment>
            <form  className="form bg-dark text-light">
            <h3>Add a Comment</h3>

        <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Enter comment here"
            value={this.state.comment} onChange={this.handleCommentChange}></input>

            <input type="text"
        className="form-control"
        placeholder="please enter your name here"
        value={this.state.promoter} onChange={this.handlePromoterChange}></input>

            <input type="text"
        className="form-control"
        value= {this.props.match.params.id} readOnly></input>
            </div>

            <button type="submit" className="btn btn-primary"   onClick={this.handleSubmit}  >Add Comment</button>
            </form>


        <Link className="btn btn-primary" to={{
            pathname: `/point/${this.state.cursor}`,
            state:{
                testa:`${testa}`,
                prevmenu: `${prevmenu}`
            }
        }}><button> Return to Comments</button>
        </Link>
        </Fragment>
    );
    };
}
export default withRouter(NewsForm);