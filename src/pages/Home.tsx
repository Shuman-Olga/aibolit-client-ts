import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { SeoPage } from "../components/Seo";
import { dataSeoHome } from "../data/dataSeo/dataSeoHome";
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
      <Outlet />
    </Container>
  );
}
