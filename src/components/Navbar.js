import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/Navbar.json';
import './styles/navbar.scss';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";


  function Navbar() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);


    return (
      <div className="sticky-top" >

        <ReactBootStrap.Navbar bg="dark" variant="dark" expand={false}>
            <ReactBootStrap.Container fluid>
              <ReactBootStrap.Navbar.Brand href="/glosariodeterminos">Glosario de terminos</ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" id="btnhector" />

              <ReactBootStrap.Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                <ReactBootStrap.Offcanvas.Header closeButton>
                  <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel"></ReactBootStrap.Offcanvas.Title>
                </ReactBootStrap.Offcanvas.Header>

                <ReactBootStrap.Offcanvas.Body className="Offcanvas-Body">

                  <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
                    <ul className="row list-unstyled">
                      {data.results.map(detalle =>(
                        <li className="col-4 col-md-6 col-sm-4" key={detalle.id}>
                            <Link to={detalle.Url} className="btn btn-secondary btn-style btnivo">{detalle.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </ReactBootStrap.Nav>

                </ReactBootStrap.Offcanvas.Body>

              </ReactBootStrap.Navbar.Offcanvas>

            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>

      </div>
    );
  }


export default Navbar;



