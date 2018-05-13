import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';


import {HeaderComponent} from "../HeaderComponent/HeaderComponent.jsx";
import {FooterComponent} from "../FooterComponent/FooterComponent.jsx";
import {ContentComponent} from "../HomePage/ContentComponent/ContentComponent.jsx";
import {ProductView} from "../SecondPage/ProductView.jsx";
import '../../final-project.scss';


export class App extends React.Component {


    render() {
        return (
            <HashRouter>
                <div className={'content-wrapper__page'}>
                    <HeaderComponent/>
                    <Route exact path='/product' component={ProductView}/>
                    <Route path='/' component={ContentComponent}/>
                    <FooterComponent/>
                </div>
            </HashRouter>
        )
    }
}


