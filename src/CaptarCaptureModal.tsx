import React from "preact/compat";
import { Modal, App } from "obsidian";
import { CaptarModal } from "./CaptarModal";
import { CaptureContainer } from "./components/CaptureContainer";

export class CaptarCaptureModal extends CaptarModal {
  constructor(app: App) {
    super(app, <CaptureContainer app={app} />);
  }
}