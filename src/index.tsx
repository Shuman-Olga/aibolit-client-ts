import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "material-icons/iconfont/material-icons.css";
import "./assets/scss/app.css";

import { ModalState } from "./context/ModelContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ModalState>
    <HelmetProvider>
      <App />{" "}
    </HelmetProvider>
  </ModalState>
);
