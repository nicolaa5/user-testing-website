import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar.js";

import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Users from "./Users.js"
import Userflow from "./Userflow.js"
import Companies from "./Companies.js"
import Researchers from "./Researchers.js"

function App() {
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

export default App;

