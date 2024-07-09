import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "material-icons/iconfont/material-icons.css";
import "./assets/scss/app.css";

import { App } from "./App";
// import { ModalState } from "./context/ModelContext";

const domNode = document.getElementById("root") as HTMLElement;

if (domNode.hasChildNodes()) {
  hydrateRoot(
    domNode,
    // <ModalState>
    <App />
    // </ModalState>
  );
} else {
  const root = createRoot(domNode);
  root.render(
    // <ModalState>
    <App />
    // </ModalState>
  );
}
