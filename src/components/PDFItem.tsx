import React from "react";
import { Button } from "react-bootstrap";

import { IPDF } from "../types/IPDF";

export function PDFItem({ title, pdf }: IPDF) {
  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className=" arrow-svg d-flex">
          <a href={require(`../assets/docs/${pdf}`)} download title="Скачать">
            <i className="bi bi-file-earmark-arrow-down me-2"></i>
            <h5>{title}</h5>
          </a>
        </div>
        <Button
          href={require(`../assets/docs/${pdf}`)}
          variant="success"
          target="_blank"
          rel="noopener noreferrer"
          className="btn mx-4"
        >
          Посмотерть
        </Button>
      </div>
      <hr />
    </>
  );
}
