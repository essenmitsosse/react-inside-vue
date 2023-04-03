import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "./index.css";

class CustomReact extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");

    ReactDOM.createRoot(mountPoint).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    const docStyle = document.createElement("style");
    docStyle.textContent = style;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(docStyle, mountPoint);
  }
}

customElements.define("custom-react", CustomReact);
