import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <switch>
              <Route exact path="/" component={Dashboard} />
            </switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
