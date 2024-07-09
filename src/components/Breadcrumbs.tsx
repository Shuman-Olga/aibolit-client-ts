import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { routesMain } from "../routes/routes";

export function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routesMain);
  const location = useLocation();
  return (
    <Container id="breadcrumbs">
      {breadcrumbs.map(
        ({ match, breadcrumb }) =>
          match.pathname &&
          location.pathname !== "/" && (
            <NavLink
              key={match.pathname}
              to={match.pathname}
              className={
                match.pathname + `/` === location.pathname
                  ? "breadcrumb-active"
                  : "breadcrumb-not-active"
              }
            >
              {breadcrumb}
            </NavLink>
          )
      )}
    </Container>
  );
}
