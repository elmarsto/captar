import { App } from "obsidian";
import { Settings } from "./main";


export interface TypedBuffer {
    buffer: ArrayBuffer;
    type: string;
}

// next two funcs adapted from https://stackoverflow.com/questions/12168909/blob-from-dataurl
export const uri2buf = (dataURI: string): TypedBuffer => {
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    var type = dataURI.split(',')[0].split(':')[1].split(';')[0]
    // write the bytes of the string to an ArrayBuffer
    var buffer = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    var ia = new Uint8Array(buffer);
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return { buffer, type };
}
export const buf2blob = ({ buffer, type }: TypedBuffer): Blob => new Blob([buffer], {type});

// TODO: redo this as a compose?
export const uri2blob = (s: string) => buf2blob(uri2buf(s))

export const mkPicPath = (app: App, { picDir, picFileNameTemplate  }: Settings): string => {
    const fileName = `${picFileNameTemplate}`;
    // TODO: interpolation of eg. YYYY-MM-DD in fileName. Moment.js?
    return `${picDir}/${fileName}.png`
}