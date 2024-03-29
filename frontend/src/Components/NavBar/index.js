import React from "react";
import "./styles.scss";
import {Nav, Navbar, Button} from "react-bootstrap";
import Image from "../../Images/logo.png";

const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="" variant="light" fixed="top">
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
          <Nav.Link href="/Home">HOME</Nav.Link>
          <Nav.Link href="/list">THE LIST</Nav.Link>
          <Nav.Link href="/groups">GROUPS</Nav.Link>
          <Nav.Link href="#">RESOURCES</Nav.Link>
          <Button href="/?" variant="dark">LOG OUT</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default NavBar;
