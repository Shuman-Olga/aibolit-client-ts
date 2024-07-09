import React from "react";
import { Helmet } from "react-helmet";

import { IHelmet } from "../types/IHelmet";

export function SeoPage({ title, description, keywords, urlname }: IHelmet) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={urlname} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://aibolit.tom.ru/assets/8b947efb21c1e40192ec.png"
      ></meta>
      <meta property="og:site_name" content="Айболит" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={urlname} />
    </Helmet>
  );
}
