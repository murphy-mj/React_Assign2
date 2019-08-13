import React, { Component,Fragment } from 'react';
import './newsForm.css';
import {withRouter,Route,Redirect} from "react-router-dom";
import api from "../../dataStore/stubAPI";
import Point from "../pointofinterest/";
import PointView from "../pointofinterestView/";
import { Link } from "react-router-dom";


class NewsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {comment: 'def', promoter: '', cursor: this.props.match.params.id};
    };

     handleCommentChange = (e) => this.setState({comment: e.target.value});
     handlePromoterChange = (e) =>  this.setState({promoter: e.target.value});
    // handleCursorChange = (e) =>  this.setState({cursor: e.target.value});

     handleSubmit = (e) => {
         e.preventDefault();
         console.log("with HandleSubmit cur " + this.state.cursor);
         console.log("with HandleSubmit prom " + this.state.promoter);
         console.log("with HandleSubmit " + this.state.comment);
         api.addComment( this.state.comment, this.state.promoter, this.state.cursor);
         this.setState({ comment: '', promoter:''})
     };

  //  handleBack = (e) => {
  //     e.preventDefault();
  //      <Route path="/" render={ (props) => {
  //           return <Point {...props}/>
  //     }}/>
//  };


    render() {
      //  console.log(this.props.location)
       // const { prev } = this.props.location.state;
        const {testa,prevmenu} = this.props.location.state;

        console.log(" additionl props 2" + `${testa}`);
        console.log(" additionl props 2 prev menu " + `${prevmenu}`);

       console.log(`${this.props.match.params.id}` +"param id");
       console.log("i'm here is newsForms");
        return (
            <Fragment>
            <form  className="form bg-dark text-light">
            <h3>Add a Comment</h3>

        <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Comment"
            value={this.state.comment} onChange={this.handleCommentChange}></input>
            </div>

            <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Promoter"
        value={this.state.promoter} onChange={this.handlePromoterChange}></input>
            </div>

            <div className="form-group">
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
        }}> Ret to Comments
        </Link>
        </Fragment>
    );
    };
}
export default withRouter(NewsForm);