import * as React from 'react';
import '../../../final-project.scss';
import './ProductDescription.scss';


export class ProductDescription extends React.Component {

    constructor() {
        super();
    }
    render() {
        return <div className={'description'}>
            <ul className={'description-list'}>
                <li className={'description-list__item'}>DESCRIPTION</li>
                <li className={'description-list__item'}>VIDEO</li>
                <li className={'description-list__item'}>SIZES&SPECS</li>
                <li className={'description-list__item'}>DELIVERY&RETURNS</li>
                <li className={'description-list__item'}>REVIEWS</li>
            </ul>
            <div className={'description-text'}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                <p>{this.props.array}</p>
            </div>
        </div>
    }
}