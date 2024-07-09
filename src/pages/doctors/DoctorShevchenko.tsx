import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { DoctorPage } from "../../components/doctors/DoctorItem";
import { dataSeoSevchenko } from "../../data/Seo/dataSeoPages2Level";
import { dataShevchenko } from "../../data/dataDoctor/dataShevchenko";

export function DoctorShevchenko() {
  return (
    <Container id="doctor" fluid>
      <SeoPage {...dataSeoSevchenko} />
      <DoctorPage {...dataShevchenko} />
    </Container>
  );
}
