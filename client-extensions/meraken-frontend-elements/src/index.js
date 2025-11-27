import React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage";
import "./index.css";


const MERAKEN_HOME_ELEMENT_ID = "meraken-frontend-element";


class WebComponenMerakenHome extends HTMLElement {
  connectedCallback() {
    this.root = createRoot(this);
    this.root.render(<Homepage />, this);
  }

  disconnectedCallback() {
    this.root.unmount();
    delete this.root;
  }
}



if (!customElements.get(MERAKEN_HOME_ELEMENT_ID)) {
  customElements.define(MERAKEN_HOME_ELEMENT_ID, WebComponenMerakenHome);
}

