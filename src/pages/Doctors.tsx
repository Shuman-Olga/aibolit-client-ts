import React from "react";
import { Container } from "react-bootstrap";

import { dataSeoDoctots } from "../data/Seo/dataSeoPages1Level";
import { SeoPage } from "../components/Seo";
import { DoctorItem } from "../components/doctors/DoctorItemPageDoctors";
import { dataSadovnikova } from "../data/dataDoctor/dataSadovnikova";
import { dataPetuhova } from "../data/dataDoctor/dataPetuhova";
import { dataShevchenko } from "../data/dataDoctor/dataShevchenko";
import { dataOstrouhova } from "../data/dataDoctor/dataOstrouhova";
import { BlockReklama3 } from "../components/reklama/BlockReklama3";

export function Doctors() {
  return (
    <Container fluid id="doctors">
      <SeoPage {...dataSeoDoctots} />
      <div className="page-h1">
        <Container>
          <h1>Наши педиатры</h1>
        </Container>
      </div>
      <Container className="text-start">
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
          <DoctorItem {...dataSadovnikova} />
          <DoctorItem {...dataPetuhova} />
          <DoctorItem {...dataShevchenko} />
          <DoctorItem {...dataOstrouhova} />
        </div>
      </Container>

      <BlockReklama3 />
    </Container>
  );
}
