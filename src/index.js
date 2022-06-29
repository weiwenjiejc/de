import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
