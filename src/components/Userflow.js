import React from 'react'
import Container from './Container'
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
import UserFlowContainer from './UserFlowContainer';
import { types } from '@babel/core';

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Example from './Example'

class Userflow extends React.Component {
    componentWillMount() {   
            this.unsubscribe = store.subscribe(() => {
                const {coordinates} = store.getState()
                this.setState({coordinates})
        })
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
      }

    /**
     * Function to retrieve screenshots and app crawler results from the server
     */
    getUserFlowContent () {
        
    }

    /**
     * Triggered when a UI element starts to get clicked/dragged
     * {@link: event.dataTransfer} sets data that can be used in onDrop, such as IDs or info important for Drag/Drop logic
     */
    onDragStart = (event, type) => {
    	event.dataTransfer.setData("type", type);
    }

    /**
     * Triggered for each frame that an element is dragged
     */
    onDrag = (event, id) => {
        event.preventDefault();
        this.props.screens.forEach((screen) => {
            if (screen.id === id) {
                screen.x = event.x;
                screen.y = event.y;
                store.dispatch(actionCreators.updateScreen(screen));
            }
        });
    }
    
    /**
     * Triggered when a UI element hovers over another DOM element
     * {@link: event.preventDefault} overrides the browser's default blocking of dropping UI elements
     */
	onDragOver = (event) => {
	    event.preventDefault();
    }
    
    /**
     * Triggered when a UI element is dropped on another DOM element
     * @param event : Contains information such as target DOM element of the drop {@link: event.target} 
     * as well as information that was initiated in {@link: onDragStart} contained in -> {@link: event.dataTransfer}
     */
    onDrop = (event, status) => {
	    let type = event.dataTransfer.getData("type");

	    let screens = this.props.screens.filter((screen) => {
	        if (screen.type === type) {
	            screen.status = status;
	        }
	        return screen;
        });


        //Reset the datatransfer object
        event.dataTransfer.clearData();
    }

    render() {
        const coordinates = this.props.coordinates;
        const dimensions = this.props.dimensions;
        const screens = this.props.screens;

        var screenStatus = {
            inProgress: [],
            done: []
          }
  
        // screens.forEach ((screen) => {
        //     screenStatus[screen.status].push(
        //         <UserFlowContainer key={screen.id} 
        //             onDragStart = {(event) => this.onDragStart(event, screen.id)}
        //             onDrag = {(event) => this.onDrag(event, screen.id)}
        //             source = {screen.image}
        //             draggable 
        //             className="draggable"
        //             type = {screen.type}
        //             x = {screen.coordinates.x}
        //             y = {screen.coordinates.y}
        //             width = {screen.dimensions.width}
        //             height = {screen.coordinates.height}
        //             style = {{backgroundColor: screen.bgcolor}}>
        //         </UserFlowContainer>
        //     );
        // });

        return (
        <React.Fragment>     
            <div className = "App-body-left">
                <h2>UserFlow</h2>
                <p>Visual overview of your application</p>
                <Button variant="outline-success" className = "button" >Sign Up</Button> 
            </div>

            <div className = "App-body-right">
                <div className = "grid">
                    <UserFlowContainer />

                    {/* {screenStatus.inProgress} */}
                </div>
            </div> 
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