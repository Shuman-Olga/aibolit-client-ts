// import React from "react";
// import { Container, Navbar, Nav } from "react-bootstrap";

// import routes from "../../router/routes";

// const Navigation = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" id="navbar">
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto multilevelMenu">
//             {routes.slice(1, -1).map((route, index) => (
//               <Nav.Link
//                 href={route.path}
//                 key={index}
//                 target="_top"
//                 rel="noopener noreferrer"
//               >
//                 {route.title}
//               </Nav.Link>
//             ))}
//           </Nav>
//           {/* <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Найти</Button>
//           </Form> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
// export default Navigation;
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
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
            {/* <NavLink
              to="/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Главная
            </NavLink>
            <NavLink
              to="/o-nas/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              О нас
            </NavLink>
            <NavLink
              to="/doctors/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Педиатры
            </NavLink>
            <NavLink
              to="/prices/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Цены
            </NavLink>
            <NavLink
              to="/programmy-nablyudeniya-za-zdorovem/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Программы
            </NavLink>
            <NavLink
              to="/uslugi-i-ceny/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Услуги
            </NavLink>
            <NavLink
              to="/blog/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Блог
            </NavLink>
            <NavLink
              to="/kontakty/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Контакты
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
