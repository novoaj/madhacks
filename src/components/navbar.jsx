
import React, {useEffect, useState} from 'react';
import "./navbar.css";
import {Button} from "react-bootstrap";



const NavigationBar = () => {
    useEffect(() =>{
        fetch("/get-exercises", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
          .then(res => res.json())
          .then(data=> {
            console.log(data)
          })
      } , [])
  return (
    <nav className="navigationBar">
      <img src="" alt="Logo" /> {/* Add your image source */}
      <h2 id="Home">WorkoutAThon</h2>

      <div className="navItems">
        <Button>primary</Button>
        <button id="Build">Build</button>
        <button id="Community">Community</button>
      </div>

      <button id="Login">Log in</button>

      <div className="container">
        <button id="SignUp">Sign Up</button>
      </div>
    </nav>
  );
};

export default NavigationBar;