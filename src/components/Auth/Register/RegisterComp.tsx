import React, { MouseEvent } from 'react';
import { Props, Event } from './config';

const RegisterComp: React.FunctionComponent<Props> = ({
   name, email, password, password2, error, changeModal, handleChange, handleSubmit
}) => {

   return (
      <div
         id='register-container'
      >
         <form id="register-form" action="" onSubmit={ handleSubmit }>
            <label className="register-label" htmlFor="name">
               name
               <span className="register-tooltip" data-tooltip="Minimum 12 characters, at least one capital and one number">
                  ?
               </span>
            </label>
            <input className="register-input" type="text" id="name" name="name" onChange={ handleChange }/>
            <label className="register-label">
               Email
               <span className="register-tooltip" data-tooltip="Please enter your email address">
                  ?
               </span>
            </label>
            <input
               className="register-input"
               id="email"
               name="email"
               type="email"
               onChange={ handleChange }
            />

            <label className="register-label" htmlFor="password">
               Password
               <span className="register-tooltip" data-tooltip="Minimum 12 characters, at least one capital and one number">
                  ?
               </span>
            </label>
            <input className="register-input" type="password" id="password" name="password" onChange={ handleChange }/>

            <label className="register-label" htmlFor="password-reenter">
               Re-enter password
            </label>
            <input className="register-input" type="password" id="password2" name="password2" onChange={ handleChange }/>
            
            <button id="register-button">Sign up now</button>
            <span className='fineprint modal-change-span' onClick={ () => changeModal() }>I already have an account</span>      
         </form>
      </div>
   );
};

export default RegisterComp;
