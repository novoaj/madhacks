import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavItem} from "react-bootstrap";
import AppLogo from "./AppLogo.png";

function NewNavbar() {
    const style = {
        // background color 0033FF
        backgroundColor: "#0033FF"
    }
    return (
        <Navbar style={style} variant="dark" >
            <Container>
                <Nav>
                    <Navbar.Brand href="/">
                        <img
                            src={AppLogo}
                            alt="AppLogo"
                            height="80" // Set the height of the image as needed
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>
                                Primary
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