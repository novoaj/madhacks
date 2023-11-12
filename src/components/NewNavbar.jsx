import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavItem} from "react-bootstrap";
import AppLogo from "./AppLogo.png";

function NewNavbar() {
    const style = {
        // background color 0033FF
        backgroundColor: "#0033FF",
        borderRadius: "0px 0 0 10px",
        paddingLeft: "40px",
        boxShadow: "0px 2px 15px rgba(0,0,0,0.5)"
    }
    const navStyle = {
        borderRadius: "30px 0 0 30px",
        paddingLeft: "40px"
    }
    return (
        <Navbar style={style} variant="dark" >
            <Container >
                <Nav className="ml-auto">
                    <Navbar.Brand href="/">
                        <img
                            src={AppLogo}
                            alt="AppLogo"
                            height="80" // Set the height of the image as needed
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="justify-content-end">
                            <Nav.Link>
                                Login
                            </Nav.Link>
                            <Nav.Link href="/SignUp.js/">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NewNavbar;