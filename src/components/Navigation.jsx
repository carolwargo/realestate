import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home"><b>PEASANT</b>|PROPERTIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Featured Properties" id="basic-nav-dropdown">
              <NavDropdown.Item href="#beach">Beach Chanties</NavDropdown.Item>
              <NavDropdown.Item href="#trapper">
                Trapper Cabins
              </NavDropdown.Item>
              <NavDropdown.Item href="#barns">Barns Builds</NavDropdown.Item>
              <NavDropdown.Item href="#sheds">
               We Shed
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Schedule a Tour
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;