import * as React from 'react';

import {HeaderComponent} from "../HeaderComponent/HeaderComponent.jsx";
import {FooterComponent} from "../FooterComponent/FooterComponent.jsx";
import {ContentComponent} from "../HomePage/ContentComponent/ContentComponent.jsx";
import {ProductView} from "../SecondPage/ProductView.jsx";
import '../../final-project.scss';



export class App extends React.Component {


    render() {

            return <div className={'content-wrapper__page'}>
                <HeaderComponent/>
                <ProductView/>
                <FooterComponent/>
            </div>
    }
}



