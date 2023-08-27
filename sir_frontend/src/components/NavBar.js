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
        <NavLink className={styles.NavLink} to='/'>
            <Navbar.Brand href="#home"><img src={favicon} alt={favicon} height='45'></img>Spanish Input Resources</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to='/'><i class="fa-solid fa-house"></i>Home</NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/resources'><i class="fa-solid fa-podcast"></i>Resources</NavLink>
          </Nav>
          <Nav className="mr-auto text-left">
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signin'><i class="fa-solid fa-right-to-bracket"></i>Sign In</NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signup'><i class="fa-solid fa-user-plus"></i>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}