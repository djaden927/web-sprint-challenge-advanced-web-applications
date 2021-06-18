import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import axiosWithAuth from './helpers/axiosWithAuth.js'
import BubblePage from "./components/BubblePage.js"

import Login from "./components/Login";
import "./styles.scss";


const logout = () => {
  const token = localStorage.getItem("token")
      localStorage.removeItem("token");
      window.location.href = '/'
};

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>
        </header> 

        <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route path="/" component={Login} />
        <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.