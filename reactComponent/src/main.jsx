import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const initApp = (element) =>
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

export default initApp;
