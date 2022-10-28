import React from 'preact/compat';
import { Vault } from 'obsidian'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    captar: {
        width: '640px',
        '& #container-circles': {
            position: 'absolute',
            left: '50%',
            bottom: '90px'
        },
        '& #inner-circle': {
            position: 'absolute',
            left: '-37px',
            width: '75px',
            height: '75px',
            backgroundColor: 'hsla(0,0%,100%,.4)',
            zIndex: 1
        },
        '& #outer-circle': {
            position: 'absolute',
            left: '-37px',
            width: '75px',
            height: '75px',
            backgroundColor: 'hsla(0,0%,100%,.4)',
            zIndex: 1
        }
        // TODO: finish import into CSS-in-JS
    }

});

interface CaptureDisplayProps {
    onTake: (dataUri: string) => void;
}

export const CaptureDisplay = (props: CaptureDisplayProps) => {
    const classes = useStyles();
    return <div className={classes.captar}>
        <Camera onTakePhoto={props.onTake} isFullscreen={true} />
    </div>
}