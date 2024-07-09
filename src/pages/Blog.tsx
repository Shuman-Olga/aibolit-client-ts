import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../components/Seo";
import { dataSeoBlog } from "../data/Seo/dataSeoPages1Level";
import { BlogItem } from "../components/blog/BlogItemPageBlog";

export function Blog() {
  return (
    <Container id="blog" fluid>
      <SeoPage {...dataSeoBlog} />
      <div className="page-h1">
        <Container>
          <h1>Блог</h1>
        </Container>
      </div>
      <Container className="my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <BlogItem />
        </div>
      </Container>
    </Container>
  );
}
