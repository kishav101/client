import React, { Component } from 'react'
import './Component.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container, NavLink, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../App.css';



export default class NavBar extends Component {
  render() {
    
    return (
      
      <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Fixed-top">
              <Container>
              <Navbar.Brand href="/">TechResQ</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavItem>
                     <Link to = "/Services"  style={{color:'white', textDecoration:'none', marginRight:'15px'}}>Our Services</Link>
                     <Link to = "/Support"  style={{color:'white', textDecoration:'none'}}>Request Support </Link>
                  </NavItem>
                </Nav>
                <Nav>
                  <Link to = "/Login"  style={{color:'white', textDecoration:'none', marginRight:'10px'}}>Login</Link>
                  <Link to = "/Register"  style={{color:'white', textDecoration:'none', marginRight:'10px'}}>  Register </Link>
                  <Link to = "/Admin"  style={{color:'white', textDecoration:'none'}}>  Admin </Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
      </div>
    
    )
  }
}
