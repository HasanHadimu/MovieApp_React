import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand href="/">Beta-Film</NavbarBrand>
          <Nav>
            <Nav.Link href="#tranding">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
