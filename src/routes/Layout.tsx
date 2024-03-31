import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <Container fluid>
      <Header />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog/post1">Post1</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <Outlet />
      <Footer />
    </Container>
  );
}
