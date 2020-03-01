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

class Userflow extends React.Component {
    componentWillMount() {
    

        this.unsubscribe = store.subscribe(() => {
        const {coordinates} = store.getState()
        this.setState({coordinates})
        })
    }

    getUserFlowContent () {
        
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
                    onDragStart = {(event) => this.onDragStart(event, screen.screenName)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: screen.bgcolor}}>
                    {screen.taskName}
                </div>
            );
        });

        return (
        <React.Fragment>     

            <div className = "App-body-left">
                <h2>UserFlow</h2>
                <p>Visual overview of your application</p>
                {/* <Button variant="outline-success" className = "button" >Sign Up</Button> */}
                <Button variant="outline-success" className = "button" >Sign Up</Button>
            </div>

            <div className = "App-body-right">
                <div className = "Userflow">
                    <UserFlowScreen className="Userflow-A" source = {A}/>
                    <UserFlowScreen className="Userflow-B" source = {B}/>
                    <UserFlowScreen className="Userflow-C" source = {C}/>
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