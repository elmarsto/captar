import React from "preact/compat";
import { uri2buf, mkPicPath } from "../util";
import { App } from "obsidian";
import { Settings } from "../main"
import { CaptureDisplay } from "./CaptureDisplay";

interface CaptureContainerProps {
    app: App;
    settings: Settings;
}

export const CaptureContainer = ({ app: { vault }, settings }: CaptureContainerProps) => {
   const doTake = React.useCallback((dataUri: string) => {
        vault.createBinary(mkPicPath(app, settings), uri2buf(dataUri).buffer)
    },[]);
    return <CaptureDisplay onTake={doTake} />
}