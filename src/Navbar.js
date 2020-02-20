import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
  return (     
    <nav >
      {/* <Link className="App-navbar-item" to="/">home</Link> */}
      <Link className="App-navbar-item" to= "/users"> users </Link>
      <Link className="App-navbar-item" to= "/companies"> companies </Link>
      <Link className="App-navbar-item" to= "/researchers"> researchers </Link>

    </nav>
  );
}

export default Navbar;