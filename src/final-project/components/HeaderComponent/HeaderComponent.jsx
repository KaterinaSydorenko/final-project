import * as React from "react";
import '../../final-project.scss';
import './HeaderComponent.scss';
import {RegistrationForm} from "../Forms/RegistrationForm.jsx";
import {SignInForm} from "../Forms/SignInForm.jsx";
import {MobNav} from "../Forms/MobNav.jsx";


export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationOn: false,
            signIn: false,
            navList: false
        };
    }

    toggleRegister() {
        this.setState((state) => {
            state.registrationOn = !state.registrationOn;
            return state;
        })
    }

    toggleSignIn() {
        this.setState((state) => {
            state.signIn = !state.signIn;
                return state;
        })
    }

    mobNavList(){
        this.setState((state) => {
            state.navList = !state.navList;
            return state;
        })
    }
    render() {

        if (this.state.registrationOn) {
            return <RegistrationForm/>
        }
        if (this.state.signIn) {
            return <SignInForm />
        }

        if (this.state.navList) {
            return <MobNav  className={'mob'}/>
        }
        return <div className={'header-mob'}>
            <button className={"btn-toggle"} onClick={this.mobNavList.bind(this)}>
                <span className={'btn-toggle__line'}> </span>
                <span className={'btn-toggle__line'}> </span>
                <span className={'btn-toggle__line'}> </span>
            </button>
            <div className={'icons'}>
                <div className={'user-icon-search'}> </div>
                <div className={'user-icon-like'}> </div>
                <div className={'user-icon-bag'}> </div>
                <div className={'user-icon-login'} onClick={this.toggleSignIn.bind(this)}> </div>
            </div>
            <div className={'header'}>
                <div className={'top-header'}>
                    <div className={'top-header__contain '}>
                        <div className={'top-header__left'}>Currency</div>
                        <div className={'top-header__right '}>
                            <div className={'header-form'}>
                                <div className={'register-form'} onClick={this.toggleRegister.bind(this)}>
                                    Register
                                </div>
                                <div className={'signIn'} onClick={this.toggleSignIn.bind(this)}>
                                    Sign in
                                </div>
                            </div>
                            <div className={'cart-counter'}>
                                <div className={'cart-img'}>
                                </div>
                                <div>
                                    empty
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'main-header__content'}>
                    <h3 className={'header__left'}>AVENUE FASHION</h3>
                    <div className={'header__right'}>
                        <ul className={'nav-list'}>
                            <li>
                                MEN
                                <div className={'arrow'}>&#709;</div>
                            </li>
                            <li>
                                WOMEN
                                <div className={'arrow'}>&#709;</div>
                            </li>
                            <li>THE BRAND</li>
                            <li>
                                LOCAL STORAGE
                                <div className={'arrow'}>&#709;</div>
                            </li>
                            <li>
                                LOOK BOOK
                                <div className={'arrow'}>&#709;</div>
                            </li>
                        </ul>
                        <div className={'search-form'}>
                            <input type="text" placeholder={'Search'} className={'search-form__content'}/>
                        </div>
                    </div>
                </div>
                <div className={'header-image'}>
                    <div className={'background-image'}> </div>
                    <div className={'background-title'}>
                        <h1>OUR LOOKBOOK</h1>
                        <h2>LATEST POSTS - MEN&WOMEN</h2>
                    </div>
                </div>
            </div>
        </div>
    }
}