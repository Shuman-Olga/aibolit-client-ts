import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoSposobyOplaty } from "../../data/Seo/dataSeoPages2Level";
import { NavMini } from "../../components/navigations/NavMini";

export function SposobyOplaty() {
  return (
    <Container fluid id="page2">
      <SeoPage {...dataSeoSposobyOplaty} />
      <div className="page-h1">
        <Container>
          <h1>Способы оплаты</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <div>
          <h4>Оплата наличными</h4>
          <div className="my-3">
            <img
              src={require(`../../assets/img/оплата_наличные.jpg`)}
              alt="оплата_наличные"
              className="me-5"
            />
            Оплата производится наличными деньгами врачу после приема или
            оказания услуг
          </div>
          <div className="my-3">
            <h4>Банковским переводом</h4>
            <img
              src={require(`../../assets/img/оплата_перевод.jpg`)}
              alt="оплата_перевод"
              className="me-5"
            />
            Вы можете оплатить услуги переводом через Сбербанк онлайн.
          </div>
        </div>
        <NavMini {...{ path: "/pacientam/" }} />
      </Container>
    </Container>
  );
}
