import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";

/**
 * App components
 */
import Navbar from "components/Navbar.js";
import Users from "components/Users.js"
import Userflow from "components/Userflow.js"
import Companies from "components/Companies.js"
import Researchers from "components/Researchers.js"

/**
 * CSS files
 */
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">          
            <Navbar/>
          </header>
  
          <div className = "App-body">
            <Switch>
                <Route exact path="/"/>              
                <Route path="/users" component= {Users} />
                <Route path="/userflow" component= {Userflow} />
                {/* <Route path="/companies" component= {Companies} />        */}
                {/* <Route path="/researchers" component= {Researchers} />    */}
            </Switch>
          </div>
          
        </div>
      </Router> 
    );
  }
}