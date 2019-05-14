import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";
import Login from "../src/components/auth/Login";
import AddClient from "../src/components/clients/AddClient";
import EditClient from "../src/components/clients/EditClient";
import ClientDetails from "../src/components/clients/ClientDetails";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/edit/:id" component={EditClient} />
                <Route exact path="/client/:id" component={ClientDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
