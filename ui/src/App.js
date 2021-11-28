import React from "react";

import "./App.css";

import Login from "./pages/login";

import Reg from "./pages/reg";

import Dashboard from "./pages/dashboard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/Login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/Signup"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <Switch>
          <Route exact path="/Login" component={Login} />

          <Route path="/Signup" component={Reg} />
        </Switch>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
