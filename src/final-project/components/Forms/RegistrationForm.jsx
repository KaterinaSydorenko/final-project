import * as React from "react";
import '../../final-project.scss';
import './Form.scss';

export class RegistrationForm extends React.Component {

    render() {



        return <form className={'form overlay'}>
            <input type="text" name={'firstname'} placeholder={'First Name'}/>
            <input type="text" name={'secondname'} placeholder={'Last Name'}/>
            <input type="text" name={'email'} placeholder={'Email'}/>
            <input type="password" name={'password'} placeholder={'Password'}/>
            <input type="password" name={'password'} placeholder={'Repeat password'}/>
            <div className={'btn-form'}>
                <button>Sign in</button>
            </div>
        </form>
    }
}