import * as React from 'react';
import Button from 'react-bootstrap/Button';

function Researchers() {
    return (
    <React.Fragment>     

        <div className = "App-body-left">
            <h2>Researchers</h2>
            <p>Give and receive reviews to academic colleagues</p>
            {/* <Button variant="outline-success" className = "button" >Sign Up</Button> */}
            <Button variant="outline-success" className = "button" >Sign Up</Button>
        </div>

        <div className = "App-body-right">
            <img className="Main-image" alt="cover" src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.png"/>   
        </div>
    </React.Fragment>
    );
}
      
export default Researchers;