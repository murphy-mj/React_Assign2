import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import Admin from "./components/admin/";
import PointPage from "./components/pointPage";
import NewsForm from "./components/newsForm/";
import Login from "./components/login/";
import PrivateRoute from "./components/privateRoute/";
import PoiPrivate from "./components/poiPrivate/";
const jsonResponse = require('./dataStore/all.json');





class Router extends Component {
    componentDidMount() {

//    data taken from this location
//    request.get("https://edeleastar.github.io/oileain-api/all.json").end((error, res) => {
//    if (res) {
//        let results = JSON.parse(res.text);
//        api.initializePoints3(results);
//        this.setState({});
//    } else {
//        console.log("problem with cop did mount  ");
//        console.log(error);
//    }
// });

      // using json file holding all points of interest, as during testing can exceed api allowance
      let results = jsonResponse;
      api.initializePoints3(results);
      this.setState({});

    }


    render() {
        console.log("SCR Index ");
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
