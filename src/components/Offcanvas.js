import React from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import * as ReactBootStrap from 'react-bootstrap';



<ReactBootStrap.Navbar bg="light" expand={false}>
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#">Navbar Offcanvas</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
    <ReactBootStrap.Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
          <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Link</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action5">
              Something else here
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </Offcanvas.Body>
    </ReactBootStrap.Navbar.Offcanvas>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>


export default Offcanvas;