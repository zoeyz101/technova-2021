import React, {Component} from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landing from "./Pages/landing";
import Home from "./Pages/home";
import List from "./Pages/list"


export default class App extends Component{

  render(){
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
          </Switch>
        </Router>
      </>
    );
  }
 
}
