import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoOtzyvy } from "../../data/Seo/dataSeoPages2Level";
import { NavMini } from "../../components/navigations/NavMini";
import { OtzyvItem } from "../../components/forpatients/OtzyvItem";

export function Otzyvy() {
  return (
    <Container fluid id="page2">
      <SeoPage {...dataSeoOtzyvy} />
      <div className="page-h1">
        <Container>
          <h1>Отзывы</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <OtzyvItem />
        <NavMini {...{ path: "/pacientam/" }} />
      </Container>
    </Container>
  );
}
