import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoOurPartners } from "../../data/Seo/dataSeoPages2Level";
import { NavMini } from "../../components/navigations/NavMini";

export function OurPartners() {
  return (
    <Container id="partners" fluid>
      <SeoPage {...dataSeoOurPartners} />
      <div className="page-h1">
        <Container>
          <h1>Наши партнеры</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <div>
          <a
            href="https://tomoko.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require(`../../assets/img/tomoko.png`)}
              alt="logo-tomoko"
              className="w-25 mb-3"
              title="tomoko"
            />
          </a>
          <div className="w-75">
            <p className="text-sm-start lh-base fs-5">
              Основное направление деятельности Центра микрохирургии глаза
              «ТомОко» – офтальмологические услуги.
            </p>
            <p className="text-start lh-base fs-5">
              Центр микрохирургии глаза «ТомОко» оказывает медицинскую помощь
              населению и провидит лечебно-диагностические мероприятия без
              стационарного пребывания больных. Все услуги оказываются
              амбулаторно, используя принцип «хирургии одного дня».
            </p>
            <p className="text-start lh-base fs-5">
              Центр микрохирургии глаза «ТомОко» оснащен современным
              высокотехнологичным медицинским оборудованием, позволяющим
              проводить консультативный прием и осмотр пациентов всех возрастов,
              с различными видами глазных заболеваний.
            </p>
            <p className="text-start lh-base fs-5">
              ​Для лечения Центр микрохирургии глаза использует только новейшие
              технологии, которые соответствуют самым высоким стандартам
              безопасности и качества.
            </p>
            <p className="fw-bold">Телефон: +7 (3822) 52-08-40</p>
            <a
              href="https://tomoko.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className=" fs-4 fw-bold"
            >
              https://tomoko.ru
            </a>
          </div>
        </div>
        <NavMini {...{ path: "/o-nas/" }} />
      </Container>
    </Container>
  );
}
