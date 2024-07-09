import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoVacancies } from "../../data/Seo/dataSeoPages2Level";
import { NavMini } from "../../components/navigations/NavMini";

export function Vacancies() {
  return (
    <Container fluid id="vacancies">
      <SeoPage {...dataSeoVacancies} />
      <div className="page-h1">
        <Container>
          <h1>Вакансии</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <div>Свободных вакансий нет</div>
        <NavMini {...{ path: "/o-nas/" }} />
      </Container>
    </Container>
  );
}
