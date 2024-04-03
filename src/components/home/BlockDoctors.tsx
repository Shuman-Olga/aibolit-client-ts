import { Container } from "react-bootstrap";

import { dataSadovnikova } from "../../data/dataDoctor/dataSadovnikova";
import { dataPetuhova } from "../../data/dataDoctor/dataPetuhova";
import { dataShevchenko } from "../../data/dataDoctor/dataShevchenko";
import { dataOstrouhova } from "../../data/dataDoctor/dataOstrouhova";
import { DoctorItem } from "./DoctorItems";

export function BlockDoctors() {
  return (
    <Container fluid id="blockdoctors" className="py-5 ">
      <Container>
        <h2 className="h2-blockdoctors">Наши педиатры</h2>
        <hr className="w-25 "></hr>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-4 mb-5 container">
          <DoctorItem {...dataSadovnikova} />
          <DoctorItem {...dataPetuhova} />
          <DoctorItem {...dataShevchenko} />
          <DoctorItem {...dataOstrouhova} />
        </div>
      </Container>
    </Container>
  );
}
