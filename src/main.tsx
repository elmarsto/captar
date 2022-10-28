import "./main.css";
import { Plugin } from "obsidian";
import { CaptarSettingTab } from "./CaptarSettingTab";
import { CaptarCaptureModal } from "./CaptarCaptureModal";
import React from "preact/compat";

interface CaptarSettings {
  example: boolean;
  mySetting: string;
};

const DEFAULT_SETTINGS: CaptarSettings = {
  example: true,
  mySetting: ""
};


export default class CaptarPlugin extends Plugin {
  icon: HTMLElement;
  settings: CaptarSettings;

  async onload() {
    this.mount(window);

    this.icon = this.addRibbonIcon('dice','Captar', (e: MouseEvent) => {
				 new CaptarCaptureModal(this.app).open();
    });
		this.addCommand({
			id: 'open-captar-modal',
			name: 'Open Captar modal',
			callback: () => {
				 new CaptarCaptureModal(this.app).open();
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