import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import favicon from '../assets/favicon.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar className={styles.NavBar} collapseOnSelect expand="lg">
      <Container>
        <NavLink to='/'>
            <Navbar.Brand href="#home"><img src={favicon} alt={favicon} height='45'></img>Spanish Input Resources</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-left">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/resources'>Resources</NavLink>
          </Nav>
          <Nav className="mr-auto text-left">
            <NavLink to='/signin'>Sign In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}