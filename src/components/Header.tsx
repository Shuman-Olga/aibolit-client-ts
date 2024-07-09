import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FormCallingDoctor } from "./modal/FormСalling";
import { Navigation } from "./navigations/Navigation";
import { ModalWindows } from "./modal/Modal";
import { ModalProvider } from "../context/ModelContext";

export function Header() {
  return (
    <Container fluid id="header" className="sticky-top">
      <div className="container my-3 d-flex align-items-center justify-content-around">
        <div className="block-logo">
          <NavLink
            to="/"
            className="navbar-brand"
            target="_top"
            rel="noopener noreferrer"
          >
            <img
              src={require(`../assets/img/aibolit_logo.png`)}
              alt="logo-aibolit"
              className="img-fluid img-logo"
              title="logo-aibolit"
            />
          </NavLink>
          <p className="/">г. Томск, ул. Герцена 68, строение 2</p>
        </div>
        <div>
          <p className="phone"> +7 (3822) 60-92-43</p>
          <p className="date text-center fw-bolder">
            Пн-Пт: 08:00 - 19:00
            <br /> Сб: 09:00 - 14:00
          </p>
        </div>
        <div>
          <ModalProvider>
            <ModalWindows title="Вызов врача на дом">
              <FormCallingDoctor />
            </ModalWindows>
          </ModalProvider>
        </div>
      </div>
      <Navigation />
    </Container>
  );
}
<ModalProvider>
  <ModalWindows title="Вызов врача на дом">
    <FormCallingDoctor />
  </ModalWindows>
</ModalProvider>;
