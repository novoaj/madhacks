
import React, {useEffect, useState} from 'react';
import "./navbar.css";
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavItem} from "react-bootstrap";



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
    // <nav className="navigationBar">
    //   <img src="" alt="Logo" /> {/* Add your image source */}
    //   <h2 id="Home">WorkoutAThon</h2>

    //   <div className="navItems">
    //     <Button>primary</Button>
    //     <Button>Build</Button>
    //     <Button>Community</Button>
    //   </div>

    //   <button id="Login">Log in</button>

    //   <div className="container">
    //     <Button>Sign Up</Button>
    //   </div>
    // </nav>
    <>
        <Navbar expand="lg">
            <Container id="hello">
                <NavbarBrand href="/">Home</NavbarBrand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link id="primary">
                            primary
                        </Nav.Link>
                        <Nav.Link id="secondary">
                            secondary
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
};

export default NavigationBar;