import * as React from "react";
import '../../final-project.scss';
import './Form.scss';

export class SignInForm extends React.Component {

    render() {

        return <form className={'form overlay mob'} >
            <input type="text" name={'email'} placeholder={'Email'}/>
            <input type="password" name={'password'} placeholder={'Password'}/>
            <div className={'btn-form'}>
            <button>Sign in</button>
            </div>
        </form>
    }
}