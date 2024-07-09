import React from "react";
import { Button, Container } from "react-bootstrap";

import { SeoPage } from "../../components/Seo";
import { dataSeoLicenses } from "../../data/Seo/dataSeoPages2Level";
import { NavMini } from "../../components/navigations/NavMini";

export function Licenses() {
  return (
    <Container fluid id="licenses">
      <SeoPage {...dataSeoLicenses} />
      <div className="page-h1">
        <Container>
          <h1>Лицензии</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between mt-4 position-block ">
        <div className="mt-2">
          <p>Регистрационный номер лицензии: Л041-01043-70/00375387</p>
          <p>Дата предоставления лицензии: 10.08.2012</p>
          <p>
            Лицензирующий орган: Департамент лицензирования и регионального
            государственного контроля Томской области
          </p>
          <p>
            Лицензируемый вид деятельности: Медицинская деятельность (за
            исключением указанной деятельности, осуществляемой медицинскими
            организациями и другими организациями, входящими в частную систему
            здравоохранения, на территории инновационного центра «Сколково»)
          </p>
          <p>
            При оказании первичной медико-санитарной помощи организуются и
            выполняются следующие работы (услуги):
          </p>
          <p>
            при оказании первичной врачебной медико-санитарной помощи в
            амбулаторных условиях по: педиатрии;
          </p>
          <p>
            при оказании первичной специализированной медико-санитарной помощи в
            амбулаторных условиях по: организации здравоохранения и
            общественному здоровью, эпидемиологии
          </p>
          <p>
            При проведении медицинских экспертиз организуются и выполняются
            следующие работы (услуги) по: экспертизе качества медицинской
            помощи.
          </p>
          <hr />
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className=" arrow-svg d-flex">
              <a
                href={require("../../assets/docs/Л041-01043-70_00375387.pdf")}
                download
                title="Скачать"
              >
                <i className="bi bi-file-earmark-arrow-down me-2"></i>
                <h5>Выписка из реестра лицензий</h5>
              </a>
            </div>
            <Button
              href={require("../../assets/docs/Л041-01043-70_00375387.pdf")}
              variant="success"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mx-4"
            >
              Посмотерть
            </Button>
          </div>
        </div>
        <NavMini {...{ path: "/o-nas/" }} />
      </Container>
    </Container>
  );
}
