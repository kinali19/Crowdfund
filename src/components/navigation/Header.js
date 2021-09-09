import React from "react";
import '../navigation/Header.css';
import { Nav,Navbar, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <div className="bg-img">
        {/* <div className="row"> */}
                    {/* <div className="col-md-12"> */}
                            <Navbar variant="dark" expand="lg" sticky="top">
                                <Container className="p-4">
                                <Navbar.Brand href="/"><img src={Logo} alt=""/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mt-3">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/about-us">About</Nav.Link>
                                    <Nav.Link href="/contact-us">Discover</Nav.Link>
                                    <Nav.Link href="/contact-us">Get Started</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <br />
                            
                    {/* </div> */}
                {/* </div> */}
        </div>
    );
}
