import React from "react";
import { Button, Container } from "react-bootstrap";

import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <Container fluid id="error">
      <Container className="my-5">
        <h1 className="text-4xl font-bold">Упс! Такой страницы нет</h1>
        <p>Извините, произошла непредвиденная ошибка.</p>
        <p className="text-slate-400">
          <i>
            {(error as Error)?.message ||
              (error as { statusText?: string })?.statusText}
          </i>
        </p>
        {/* {error.status === 404 ? <p>Упс! Такой страницы нет</p> : ""} */}

        <Button
          variant="secondary"
          href="/"
          target="_top"
          rel="noopener noreferrer"
        >
          На главную
        </Button>
      </Container>
    </Container>
  );
}
