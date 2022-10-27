import "./main.css";

import { Plugin } from "obsidian";
import Preact from "preact/compat";

import { CaptarView, captarIcon } from "./CaptarView";

export default class CaptarPlugin extends Plugin {


  unload(): void {}

  onunload() {}

  async onload() {

    // Mount an empty component to start; views will be added as we go
    this.mount(window);
  }

  mount(win: Window) {
    const el = win.document.body.createDiv();

    Preact.render(<></>, el);
  }

  unmount(win: Window) {}
}
