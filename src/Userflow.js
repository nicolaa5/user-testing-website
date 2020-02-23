import React from 'react';
import Button from 'react-bootstrap/Button';
import A from '../src/media/1.png';
import B from '../src/media/2.png';
import C from '../src/media/3.png';

function Userflow() {
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
      
export default Userflow;