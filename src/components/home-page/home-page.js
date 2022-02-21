import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Homepage = () => {
  return (
    // <Router>
    <Navbar bg="light">
      <Container fluid>
        <img
          src="/Asset/crud.png"
          alt="crud"
          style={{ height: "30px", width: "40px" }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="#home">Payroll</Nav.Link>
            <Nav.Link to="#home">People</Nav.Link>
            <Nav.Link to="#home">Workerly</Nav.Link>
            <Nav.Link to="#home">Books</Nav.Link>
            <Nav.Link to="#home">Expense</Nav.Link>
            <Nav.Link to="#home">Mail</Nav.Link>
            <NavDropdown title="All Products" id="basic-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link to="#home" style={{ color: "red" }}>
              SIGN IN
            </Nav.Link>
            <Nav.Link to="#link" style={{ backgroundColor: "red" }}>
              SIGN UP NOW
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};

export default Homepage;
