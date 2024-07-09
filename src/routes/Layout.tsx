import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
// import { Breadcrumbs } from "../components/Breadcrumbs";

export function Layout() {
  return (
    <Container fluid>
      <Header />
      {/* <Breadcrumbs /> */}
      <Outlet />
      <Footer />
    </Container>
  );
}
