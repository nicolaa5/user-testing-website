import React from 'react';
import Button from 'react-bootstrap/Button';

function Companies() {
    return (
        <React.Fragment>
            <div className = "App-body-left">
                <h2>Companies</h2>
                <p>Get immediate UX feedback from your customers</p>
                <Button variant="outline-success" className = "button" >Sign Up</Button>
            </div>

            <div className = "App-body-right">
                <img className="Main-image" alt="cover" src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.png"/>
            </div>
        </React.Fragment>
    );
}
      
export default Companies;