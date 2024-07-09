import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../components/Seo";
import { dataSeoHome } from "../data/Seo/dataSeoPages1Level";
import { BlockInfo } from "../components/home/BlockInfo";
import { BlockImg } from "../components/home/BlockImg";
import { BlockDoctors } from "../components/home/BlockDoctors";
import { BlockAdvantages } from "../components/home/BlockAdvantages";
import { BlockContacts } from "../components/home/BlockContacts";

export function Home() {
  return (
    <Container fluid id="home">
      <SeoPage {...dataSeoHome} />
      {/* <WorkOnHolidays /> */}
      <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
}
