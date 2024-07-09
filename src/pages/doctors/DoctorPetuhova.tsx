import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { DoctorPage } from "../../components/doctors/DoctorItem";
import { dataSeoPetuhova } from "../../data/Seo/dataSeoPages2Level";
import { dataPetuhova } from "../../data/dataDoctor/dataPetuhova";

export function DoctorPetuhova() {
  return (
    <Container id="doctor" fluid>
      <SeoPage {...dataSeoPetuhova} />
      <DoctorPage {...dataPetuhova} />
    </Container>
  );
}
