import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="warning  " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              width={150}
              src="logomak_logo.png"
              alt="img"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Головна
            </NavLink>
            <NavLink to="/info" className="nav-link">
              Інформація
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              Контакти
            </NavLink>

            <NavLink className="nav-link" to="/basket">
              Кошик
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
