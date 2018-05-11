import * as React from 'react';
import {ProductOption} from "./ProductOption/ProductOption.jsx";
import {ProductDescription} from "./ProductDescription/ProductDescription.jsx";

import './ProductView.scss';





export class ProductView extends React.Component {

    render() {

        return <div className={'content-product'}>
            <ProductOption/>
            <ProductDescription/>
        </div>
    }
}