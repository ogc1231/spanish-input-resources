import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import favicon from '../assets/favicon.png'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <div>
            <img src={favicon} alt={favicon} height='45'></img>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-left">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
          </Nav>
          <Nav className="mr-auto text-left">
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link href="#memes">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}