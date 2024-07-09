import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { routesMain } from "../../routes/routes";

export function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto ">
            {routesMain[0].children.slice(1, -1).map((link) => (
              <Nav.Link
                key={link.path}
                href={link.path}
                target="_top"
                rel="noopener noreferrer"
              >
                {link.breadcrumb}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
