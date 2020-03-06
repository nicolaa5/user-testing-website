import React from 'react';
import Button from 'react-bootstrap/Button';
import A from 'media/1.png';
import B from 'media/2.png';
import C from 'media/3.png';

/**
 * Redux objects
 */
import {store} from 'index.js'
import {actionCreators} from 'index.js'
import { connect } from 'react-redux'
import UserFlowScreen from './UserFlowScreen';
import { types } from '@babel/core';

class Userflow extends React.Component {
    componentWillMount() {   
        this.unsubscribe = store.subscribe(() => {
        const {coordinates} = store.getState()
        this.setState({coordinates})
        })
    }

    getUserFlowContent () {
        
    }

    onDragStart = (event, type) => {
    	event.dataTransfer.setData("type", type);
	}
	onDragOver = (event) => {
	    event.preventDefault();
    }
    
    onDrop = (event, status) => {
	    let type = event.dataTransfer.getData("type");

	    let screens = this.props.screens.filter((screen) => {
	        if (screen.type === type) {
	            screen.status = status;
	        }
	        return screen;
        });
        
        const action = {
            type: types.UPDATE_SCREEN,
            screens
          }

          store.dispatch(actionCreators.updateScreen(screens));

	    // this.setState({
	    //     ...this.state,
	    //     screens
	    // });
	}


    render() {
        const coordinates = this.props.coordinates;
        const dimensions = this.props.dimensions;
        const screens = this.props.screens;

        console.log(screens);
        var screenStatus = {
            inProgress: [],
            done: []
          }
  
        screens.forEach ((screen) => {
            console.log(screen.type);
            screenStatus[screen.status].push(
                <div key={screen.id} 
                    onDragStart = {(event) => this.onDragStart(event, screen.type)}
                    draggable
                    className="draggable"
                    type = {screen.type}
                    x = {screen.coordinates.x}
                    y = {screen.coordinates.y}
                    width = {screen.dimensions.width}
                    height = {screen.coordinates.height}
                    style = {{backgroundColor: screen.bgcolor}}>
                </div>
            );
        });

        return (
        <React.Fragment>     
	      <div className="drag-container">
	        <h2 className="head">To Do List Drag & Drop</h2>
		    <div className="inProgress"
	    		onDragOver={(event)=>this.onDragOver(event)}
      			onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
	          <span className="group-header">In Progress</span>
	          {screenStatus.inProgress}
	        </div>
	        <div className="droppable"
	        	onDragOver={(event)=>this.onDragOver(event)}
          		onDrop={(event)=>this.onDrop(event, "done")}>
	          <span className="group-header">Done</span>
	          {screenStatus.Done}
	        </div>	        
	      </div>


            {/* <div className = "App-body-left">
                <h2>UserFlow</h2>
                <p>Visual overview of your application</p>
                {/* <Button variant="outline-success" className = "button" >Sign Up</Button> 
                <Button variant="outline-success" className = "button" >Sign Up</Button>
            </div>

            <div className = "App-body-right">
                <div className = "Userflow">
                    {screenStatus.inProgress}
                    <UserFlowScreen className="Userflow-A" source = {A}/>
                    <UserFlowScreen className="Userflow-B" source = {B}/>
                    <UserFlowScreen className="Userflow-C" source = {C}/>
                </div>
            </div> */}
        </React.Fragment>
        );
    }
}

/**
 * Maps the state to the component's props 
 * @param {*} store : provides access to the app's redux store
 */
const mapStateToProps = (store) => ({
    dimensions: store.changeScreenDimensions.dimensions,
    coordinates: store.moveScreen.coordinates,
    screens: store.screenAttributes.screens
  })

/**
 * The connect() function connects a React component to a Redux store.
 */
export default connect(mapStateToProps)(Userflow)