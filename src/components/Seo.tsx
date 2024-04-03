import { Helmet } from "react-helmet-async";
import { typeHelmet } from "../types/typeHelmet";

export function SeoPage({ title, description, keywords, urlname }: typeHelmet) {
  return (
    <Helmet>
      <title>
        {title}
        {/* Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская служба */}
      </title>
      <meta
        name="description"
        content={description}
        // "Айболит. Вызов педиатра на дом в Томске, вызывать детского врача (ЛОР, невролог, окулист, хирург) на дом. Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
      />
      <meta
        name="keywords"
        content={keywords}
        // "Айболит, детская медицинская служба, клиника, вызвать детский врач,вызов, педиатр, программы наблюдения, анализы, ребенок, новорожденного, на дом, цена, Томск"
      />
      <link
        rel="canonical"
        href={urlname}
        // "https://aibolit.tom.ru/"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://aibolit.tom.ru/assets/8b947efb21c1e40192ec.png"
      ></meta>
      <meta property="og:site_name" content="Айболит" />
      <meta
        property="og:title"
        content={title}
        // "Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская       служба"
      />
      <meta
        property="og:description"
        content={description}
        // "Айболит. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
      />
      <meta
        property="og:url"
        content={urlname}
        // "https://aibolit.tom.ru/"
      />
    </Helmet>
  );
}
