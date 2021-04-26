import React from 'react';
import { Props } from './config';

const LoginComp: React.FunctionComponent<Props> = ({
   email, password, error
}) => {
   return (
      <>
      <div className='steam-signup-form'>
         <form className="form front" action="">
            <label className="form__label" for="email">Your Email <span className="form__tooltip" data-tooltip="Please enter your email address">?</span></label>
            <input className="form__text" type="email" id="email" name="email" />
            <label className="form__label" for="password">Password <span className="form__tooltip" data-tooltip="Minimum 12 characters, at least one capital and one number">?</span></label>
            <input className="form__text" type="password" id="password" name="password" />
            
            <button className="button">Login</button>
            <a href="#" className="fineprint">Don't have an account? Register now!</a>      
         </form>
      </div>
      </>
   );
};

export default LoginComp;
