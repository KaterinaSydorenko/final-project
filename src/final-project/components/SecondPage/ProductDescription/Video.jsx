import * as React from "react";
import {Player} from 'video-react';

import {ProductDescription} from "./ProductDescription.jsx";


export class VideoOn extends React.Component {

    render() {
        return <div>
            <ProductDescription/>
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </div>
    }
}