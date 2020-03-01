import React, { Component } from 'react'
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "components/Navbar.js";

import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import { connect } from 'react-redux'
import Users from "components/Users.js"
import Userflow from "components/Userflow.js"
import Companies from "components/Companies.js"
import Researchers from "components/Researchers.js"

const mapStateToProps = (state) => ({
  dimensions: state.dimensions,
  coordinates: state.coordinates
})

class App extends Component {

  state = {}

  componentWillMount() {
    console.log(this.props);
    const {store} = this.props

    const {dimensions} = store.dimensions;
    const {coordinates} = store.coordinates
    
    this.setState({dimensions})
    this.setState({coordinates})

    this.unsubscribe = store.subscribe(() => {
      const {coordinates} = store.getState()
      this.setState({coordinates})
    })
  }

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

export default connect(mapStateToProps)(App)
