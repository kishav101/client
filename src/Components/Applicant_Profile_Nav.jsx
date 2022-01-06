import React, { Component } from 'react'
import './Component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container } from 'react-bootstrap';


export default class Applicant_Profile_Nav extends Component {
  render() {
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
              <Container>
              <Navbar.Brand href="/">TechResQ</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                 
                  
                </Nav>
                <Nav>
                  <Nav.Link href= "/">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
      </div>
    )
  }
}
