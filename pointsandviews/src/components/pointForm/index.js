import React, { Component } from 'react';
import './pointForm.css';

export default class Form extends Component {
    state ={title:'',promoter:'',link:''};

    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleAuthorChange = (e) =>  this.setState({author: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.author, this.state.link)
        this.setState({ title: '', author:'', link: ''})
    }



    render() {
        console.log("THIS IS POINT FORM, I DONT BELIEVED IT USED, plaese remove");

        return (
            <form  className="form bg-dark text-light">
            <h3>Add a comment on Point of Interest</h3>
        <div className="form-group">

            <input type="text"
        className="form-control"
        placeholder="Title"
        value={this.state.title}
        onChange={ this.handleTitleChange } >
        </input>
            </div>
            <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Promoter"
        value={this.state.promoter}
        onChange={ this.handleAuthorChange }>
            </input>
            </div>
            <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Link"
        value={this.state.link}
        onChange={ this.handleLinkChange }>
            </input>
            </div>
            <button type="submit" className="btn btn-primary"  onClick={this.handleSubmit}>Add Comment</button>
            </form>
    );
    }
}