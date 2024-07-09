import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoOstrouhova } from "../../data/Seo/dataSeoPages2Level";
import { DoctorPage } from "../../components/doctors/DoctorItem";
import { dataOstrouhova } from "../../data/dataDoctor/dataOstrouhova";

export function DoctorOstrouhova() {
  return (
    <Container id="doctor" fluid>
      <SeoPage {...dataSeoOstrouhova} />
      <DoctorPage {...dataOstrouhova} />
    </Container>
  );
}
