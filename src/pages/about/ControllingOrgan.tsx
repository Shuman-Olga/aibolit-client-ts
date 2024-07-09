import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoControlingOrgan } from "../../data/Seo/dataSeoPages2Level";
import { ControlingOrganItem } from "../../components/about/ControlingOrganItem";
import { DataControlingOrgan } from "../../data/dataControlingOrgan";
import { NavMini } from "../../components/navigations/NavMini";

export function ControllingOrgan() {
  return (
    <Container fluid id="controlling">
      <SeoPage {...dataSeoControlingOrgan} />
      <div className="page-h1">
        <Container>
          <h1>Контролирующие организации</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between mt-4 position-block">
        <div className="d-flex flex-wrap">
          {DataControlingOrgan.map((item, index) => (
            <ControlingOrganItem {...item} key={index} />
          ))}
        </div>

        <NavMini {...{ path: "/o-nas/" }} />
      </Container>
      <Container className="text-center my-5 ">
        <iframe
          title="Баннер Министерства здравоохранения по независимой оценки качества оказания услуг медицинскими организациями"
          src="https://nok.minzdrav.gov.ru/ogv/GetBannerNok/23/1"
          width="400"
          height="200"
        ></iframe>
      </Container>
    </Container>
  );
}
