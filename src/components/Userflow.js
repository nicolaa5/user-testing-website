import React from 'react';
import Button from 'react-bootstrap/Button';
import A from 'media/1.png';
import B from 'media/2.png';
import C from 'media/3.png';

import { actionCreators } from 'reducer/userFlowReducer'

class Userflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
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
      
export default Userflow;