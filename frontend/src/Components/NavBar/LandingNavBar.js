import React from "react";
import "./styles.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../../Images/logo.png";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="light" fixed="top" className="navbar">
      <Navbar.Brand href="/">
        <img
          src={Image}
          width="250"
          height="75"
          className="d-inline-block align-top"
          alt="AccomplishWomen+ Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/Home">LOGIN</Nav.Link>
          <Button href="#" variant="dark">JOIN NOW</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
