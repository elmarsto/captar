import React from "preact/compat";
import { Modal, App } from "obsidian";
import { CaptarModal } from "./CaptarModal";
import { CaptureContainer } from "./components/CaptureContainer";
import { Settings } from "./main"

export class CaptarCaptureModal extends CaptarModal {
  constructor(app: App, settings: Settings) {
    super(app, <CaptureContainer app={app} settings={settings} />);
  }
}