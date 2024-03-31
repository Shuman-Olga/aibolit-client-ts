import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { SeoPage } from "../components/Seo";
import { typeHelmet } from "../types/typeHelmet";

export function Home() {
  const dataSeoHome: typeHelmet = {
    title:
      " Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская служба",
    description:
      "Айболит. Вызов педиатра на дом в Томске, вызывать детского врача (ЛОР, невролог, окулист, хирург) на дом. Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных.",
    keywords:
      "Айболит, детская медицинская служба, клиника, вызвать детский врач,вызов, педиатр, программы наблюдения, анализы, ребенок, новорожденного, на дом, цена, Томск",
    urlname: "https://aibolit.tom.ru/",
  };
  return (
    <Container fluid id="home">
      <SeoPage {...dataSeoHome} />

      {/* <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://aibolit.tom.ru/assets/8b947efb21c1e40192ec.png"
        ></meta>
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская
        служба"
        />
        <meta
          property="og:description"
          content="Айболит. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta property="og:url" content="https://aibolit.tom.ru/" />
      </Helmet> */}
      {/* <WorkOnHolidays /> */}
      {/* <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts /> */}
      <Outlet />
    </Container>
  );
}
