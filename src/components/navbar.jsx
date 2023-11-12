import React from "react";
import "./navbar.css";

function Navbar(props) {
    return (
    <nav className="navigationBar">
        <img></img>
        <h2 id="Home">WorkoutAThon</h2>

        <div class="navItems">
          <btn id="Programs">Programs</btn>
          <btn id="Build">Build</btn>
          <btn id="Community">Community</btn>
        </div>

        <btn id="Login">Log in</btn>
        
        <div class="container">
          <btn id="SignUp">Sign Up</btn>
        </div>
      </nav>
    )
}

export default Navbar;