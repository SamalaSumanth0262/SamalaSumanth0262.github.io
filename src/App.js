import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
