import * as React from 'react'
import { Component } from 'react'
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";

/**
 * App components
 */
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import Userflow from "./components/Userflow"
import Companies from "./components/Companies"
import Researchers from "./components/Researchers"

/**
 * CSS files
 */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {
  
}
export default class App extends React.Component<AppProps> {

  render() {
    return (
      <Router>
        <div className ="App">
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