import * as React from 'react'
import { useState, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import UserFlowContainer from './UserFlowContainer'


function Userflow() {
    
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
      hideSourceOnDrag,
    ])

    return (
        <React.Fragment>     
            <div className = "App-body-left">
                <h2>UserFlow</h2>
                <p>Visual overview of your application</p>
                <Button variant="outline-success" className = "button" >Sign Up</Button> 
            </div>

            <div className = "App-body-right">
                <div className = "grid">
                    <UserFlowContainer hideSourceOnDrag={hideSourceOnDrag}  />
                    <p>
                        <label htmlFor="hideSourceOnDrag">
                        <input
                            id="hideSourceOnDrag"
                            type="checkbox"
                            checked={hideSourceOnDrag}
                            onChange={toggle}
                        />
                        <small>Hide the source item while dragging</small>
                        </label>
                    </p>
                    {/* {screenStatus.inProgress} */}
                </div>
            </div> 
        </React.Fragment>
    );
}

export default Userflow;