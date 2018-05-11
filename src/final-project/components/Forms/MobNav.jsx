import * as React from "react";
import '../../final-project.scss';
import './MobNav.scss';
import {HeaderComponent} from "../HeaderComponent/HeaderComponent.jsx";

export class MobNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navList: false
        };
    }
    mobNavList(){
        this.setState((state) => {
            state.navList = !state.navList;
            return state;
        })
    }
    render () {
        if (this.state.navList) {
            return <HeaderComponent/>
        }

        return <div className={'mob-nav'}>
            <button className={"btn-toggle"} onClick={this.mobNavList.bind(this)}>
                <span className={'btn-toggle__line'}> </span>
                <span className={'btn-toggle__line'}> </span>
                <span className={'btn-toggle__line'}> </span>
            </button>
            <div className={'nav-container'}>
                <ul className={'nav-list'}>
                    <li>
                        MEN
                    </li>
                    <li>
                        WOMEN
                    </li>
                    <li>THE BRAND</li>
                    <li>
                        LOCAL STORAGE
                    </li>
                    <li>
                        LOOK BOOK
                    </li>
                </ul>
                <div className={'search-form'}>
                    <input type="text" placeholder={'Search'} className={'search-form__content'}/>
                </div>
            </div>
        </div>
    }
}