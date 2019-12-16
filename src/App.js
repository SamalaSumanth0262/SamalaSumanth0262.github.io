import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/'
            component={() => {
              return <div>Sumanth</div>;
            }}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
