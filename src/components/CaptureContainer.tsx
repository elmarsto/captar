import React from "preact/compat";
import { uri2buf, mkPicPath } from "../util";
import { App } from "obsidian";
import { CaptureDisplay } from "./CaptureDisplay";

interface CaptureContainerProps {
    app: App;
}

export const CaptureContainer = ({ app: { vault }}: CaptureContainerProps) => {
   const doTake = React.useCallback((dataUri: string) => {
        vault.createBinary("foo.png", uri2buf(dataUri).buffer)
    },[]);
    return <CaptureDisplay onTake={doTake} />
}