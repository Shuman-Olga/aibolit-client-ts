import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoSadovnikova } from "../../data/Seo/dataSeoPages2Level";
import { DoctorPage } from "../../components/doctors/DoctorItem";
import { dataSadovnikova } from "../../data/dataDoctor/dataSadovnikova";

export function DoctorSadovnikova() {
  return (
    <Container id="doctor" fluid>
      <SeoPage {...dataSeoSadovnikova} />
      <DoctorPage {...dataSadovnikova} />
    </Container>
  );
}
