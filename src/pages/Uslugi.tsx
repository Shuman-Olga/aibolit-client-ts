import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../components/Seo";
import { UslugiItems } from "../components/uslugi/UslugiItemPageUslugi";
import { BlockReklama3 } from "../components/reklama/BlockReklama3";
import { dataSeoServices } from "../data/Seo/dataSeoPages1Level";

export function Uslugi() {
  return (
    <Container id="services" fluid>
      <SeoPage {...dataSeoServices} />
      <div className="page-h1">
        <Container>
          <h1>Услуги</h1>
        </Container>
      </div>
      <Container>
        <BlockReklama3 />
        <UslugiItems />
      </Container>
    </Container>
  );
}
