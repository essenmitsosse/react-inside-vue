import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "./index.css";
import styleApp from "./App.css";

class CustomReact extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.ReactDOMRoot = ReactDOM.createRoot(this.mountPoint);
  }

  connectedCallback() {
    const value = this.getAttribute("value");

    this.ReactDOMRoot.render(
      <React.StrictMode>
        <App value={value} />
      </React.StrictMode>
    );

    const docStyle = document.createElement("style");
    docStyle.textContent = style;

    const docStyle2 = document.createElement("style");
    docStyle2.textContent = styleApp;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(docStyle, docStyle2, this.mountPoint);
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(nameValue, oldValue, newValue) {
    if (nameValue === "value") {
      this.ReactDOMRoot.render(
        <React.StrictMode>
          <App value={newValue} />
        </React.StrictMode>
      );
    }
  }
}

customElements.define("custom-react", CustomReact);
