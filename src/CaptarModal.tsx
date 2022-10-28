import React from "preact/compat";
import { Modal, App } from "obsidian";

export class CaptarModal extends Modal {
  element: React.JSX.Element;
  constructor(app: App, elt: React.JSX.Element) {
    super(app);
    this.element = elt;
  }
  onOpen() {
    const {element, contentEl, modalEl} = this;
    React.render(element, contentEl);
  }
  onClose() {
    const {contentEl} = this;
    React.unmountComponentAtNode(contentEl);
  }
}