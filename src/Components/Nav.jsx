import React, { Component } from 'react'
import './Component.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container } from 'react-bootstrap';


export default class NavBar extends Component {
  render() {
    
    return (
      
      <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="/">TechResQ</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                 
                  <Nav.Link href= "/Services">Our Services</Nav.Link>
                  <Nav.Link href= "/Join_Us">Join Us ?</Nav.Link>
                 
                </Nav>
                <Nav>
                  <Nav.Link >Login</Nav.Link>
                  <Nav.Link >
                   Register
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            
      </div>
    
    )
  }
}
