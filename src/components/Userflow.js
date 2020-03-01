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

class Userflow extends React.Component {
    componentWillMount() {
        
        const {coordinates} = this.props.coordinates;
        const {dimensions} = this.props.dimensions
        
        this.setState({dimensions})
        this.setState({coordinates})

        this.unsubscribe = store.subscribe(() => {
        const {coordinates} = store.getState()
        this.setState({coordinates})
        })
    }

    getUserFlowContent () {
        
    }

    onMoveScreen = (index) => {
        const {store} = this.props
    
        store.dispatch(actionCreators.move(index))
    }

    render() {
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
                    <img className="Userflow-A" alt="cover" src= {A}/> 
                    <img className="Userflow-B" alt="cover" src= {B}/> 
                    <img className="Userflow-C" alt="cover" src= {C}/> 

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
    coordinates: store.moveScreen.coordinates
  })

/**
 * The connect() function connects a React component to a Redux store.
 */
export default connect(mapStateToProps)(Userflow)