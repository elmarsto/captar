import "./main.css";
import { Plugin } from "obsidian";
import { CaptarSettingTab } from "./CaptarSettingTab";
import { CaptarCaptureModal } from "./CaptarCaptureModal";
import React from "preact/compat";

export interface Settings {
  picDir: string;
  picFileNameTemplate: string;
  manifestDir: string;
  manifestFileNameTemplate: string;
  linkTemplate: string;
};

export const DEFAULT_SETTINGS: Settings = {
  picDir: "pic/",
  picFileNameTemplate: "",
  manifestDir: "manifest/",
  manifestFileNameTemplate: "",
  linkTemplate: "![{pic}]({manifest})"
};


export default class CaptarPlugin extends Plugin {
  icon: HTMLElement;
  settings: Settings;

  async onload() {
    this.mount(window);

    this.icon = this.addRibbonIcon('camera','Captar', (e: MouseEvent) => {
				 new CaptarCaptureModal(this.app, this.settings).open();
    });
		this.addCommand({
			id: 'open-captar-modal',
			name: 'Open Captar modal',
			callback: () => {
				 new CaptarCaptureModal(this.app, this.settings).open();
			}
		});
		this.addSettingTab(new CaptarSettingTab(this.app, this));
  }
  unmount(win: Window) {}

  async mount(win: Window) {
    const el = win.document.body.createDiv();
    // TODO: is this boilerplate needed? Try taking it out
    React.render(<></>, el);
  }


  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

}