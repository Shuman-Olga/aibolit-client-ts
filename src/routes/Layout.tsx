import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <Container fluid>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
