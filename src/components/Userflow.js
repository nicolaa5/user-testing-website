import React from 'react'
import Button from 'react-bootstrap/Button';
import UserFlowContainer from './UserFlowContainer'


class Userflow extends React.Component {
    /**
     * Function to retrieve screenshots and app crawler results from the server
     */
    getUserFlowContent () {
        
    }

    render() {
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
export default Userflow