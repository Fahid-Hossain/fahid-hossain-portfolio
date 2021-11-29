import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"  className="navlink">HOME</Nav.Link>
                            <Nav.Link href="#about" className="navlink">ABOUT</Nav.Link>
                            <Nav.Link href="#services" className="navlink">SERVICES</Nav.Link>
                            <Nav.Link href="#skills" className="navlink">SKILLS</Nav.Link>
                            <Nav.Link href="#projects" className="navlink">PROJECTS</Nav.Link>
                            <Nav.Link href="#contact" className="navlink">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;