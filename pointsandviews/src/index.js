import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Admin from "./components/admin/";
import PointPage from "./components/pointPage";
import NewsForm from "./components/newsForm/";
import Login from "./components/login/";
import PrivateRoute from "./components/privateRoute/";
import PoiPrivate from "./components/poiPrivate/";
//import jsonResponse from './dataStore/all.js';
// if (jsonResponse) {
//  let results = jsonResponse;
//JSON.parse(res.text);

class Router extends Component {
    componentDidMount() {
        console.log("in comp did mount");
        request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
            if (res) {
                let results = JSON.parse(res.text);
                console.log("router index");
                //          console.log(this.props);
                //          console.log(results[0].coastalZone);
                api.initializePoints3(results);
                //     api.initializePoints4(results);
                //   api.initializePoints2(results[0].pois);
                this.setState({});
            } else {
                console.log("problem with cop did mount  ");
                console.log(error);

           }
     });
    }


    render() {
        console.log("SCR Index ");
        // console.log("props ?  "+ this.props.location);

        // console.log("SCR Index admin?  "+ this.props.location.state.pathname);
       //  console.log("lest see prive Rourte param id");
       //  console.log(this.props.match.params.id);
        return (
            <BrowserRouter>
            <div className="jumbotron">
            <div className="container-fluid ">
            <Switch>
            <Route exact path="/point/:id" component={PointPage} />
        <Route exact path="/point/:id/comment" component={NewsForm}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={App} />
        <PrivateRoute exact path="/point/:id/private" component={PoiPrivate}  />
        <Redirect from="*" to="/" />
            </Switch>
            </div>
            </div>
            </BrowserRouter>
    );
    }

}

ReactDOM.render(<Router />, document.getElementById("root"));
