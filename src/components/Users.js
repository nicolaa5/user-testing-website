import React from 'react';
import Button from 'react-bootstrap/Button';
import UserSession from "media/user-session.mp4";


function Users() {
    return (
        <React.Fragment>

            <div className = "App-body-left">
                <h2>User Testing</h2>
                <p>Receive payment for reviewing applications</p>
                <Button variant="outline-success" className = "button" >Sign Up</Button>
            </div>

            <div className = "App-body-right">
                <video width="520" height="520" autoPlay loop autobuffer = "true" muted playsInline >
                <source src= {UserSession} type="video/mp4"/>
                <source src="/src/media/user-session.ogg" type="video/ogg"/>
                </video>     
            </div>

        </React.Fragment>
    );
}
      
export default Users;