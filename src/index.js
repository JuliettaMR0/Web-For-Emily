import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Selecciona el elemento root y crea la raíz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
