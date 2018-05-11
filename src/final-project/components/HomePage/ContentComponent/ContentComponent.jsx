import * as React from "react";
import {ContentList} from "./ContentList/ContentList.jsx";
import {ContentProducts} from "./ContentProducts/ContentProducts.jsx";
import {ImageSlider} from "./ImageSlider/ImageSlider.jsx";


export class ContentComponent extends React.Component {

    render() {
        return <div>
        <div className={'content-wrapper'}>
            <ContentList/>
            <ContentProducts/>
            </div>
            <ImageSlider/>
        </div>
    }
}

