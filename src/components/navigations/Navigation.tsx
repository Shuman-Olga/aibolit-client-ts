import { Container, Navbar, Nav } from "react-bootstrap";

import { LinkMenu } from "../../data/dataLinkMenu";

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
            {LinkMenu.map((link) => (
              <Nav.Link
                key={link.path}
                href={link.path}
                target="_top"
                rel="noopener noreferrer"
              >
                {link.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
