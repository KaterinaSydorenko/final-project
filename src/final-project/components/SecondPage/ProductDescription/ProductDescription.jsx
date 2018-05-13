import * as React from 'react';

import '../../../final-project.scss';
import './ProductDescription.scss';
import {VideoOn} from "./Video.jsx";
import {DescriptionOn} from "./DynamicText.jsx";


export class ProductDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoOn: false,
            descriptionOn: false
        };
    }
    DescriptionOn() {
        this.setState((state) => {
            state.descriptionOn = !state.descriptionOn;
            return state;
        });
    }
        VideoOn(){
            this.setState((state) => {
                state.videoOn = !state.videoOn;
                return state;
            })
        }

    render() {

        if (this.state.videoOn) {
            return <VideoOn />
        }
            if (this.state.descriptionOn) {
                return <DescriptionOn />
            }

        return <div className={'description'}>
            <ul className={'description-list'}>
                <li className={'description-list__item'} onClick={this.DescriptionOn.bind(this)}> DESCRIPTION</li>
                <li className={'description-list__item onClick'} onClick={this.VideoOn.bind(this)}>VIDEO</li>
                <li className={'description-list__item'}>SIZES&SPECS</li>
                <li className={'description-list__item'}>DELIVERY&RETURNS</li>
                <li className={'description-list__item'}>REVIEWS</li>
            </ul>

        </div>
    }
}