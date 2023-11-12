
import React, {useEffect, useState} from 'react';
import "./navbar.css";
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavItem} from "react-bootstrap";
import AppLogo from "./AppLogo.png";




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
    <>
        <Navbar>
            <Container id="hello">
                    <Navbar.Brand href="/">
                        <img
                            src={AppLogo}
                            alt="AppLogo"
                            id="appLogo"
                            height="80" // Set the height of the image as needed
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links">
                        <Nav.Link id="primary">
                            Primary
                        </Nav.Link>
                        <Nav.Link id="secondary" href="/SignUp.js/">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </>
  );
};

export default NavigationBar;