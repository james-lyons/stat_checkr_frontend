import React from 'react';
import { Props } from './config';
import { Form, Button, Header, Message } from 'semantic-ui-react'

const LoginComp: React.FunctionComponent<Props> = ({
   email, password, loginSuccess, error, changeModal, handleChange, handleSubmit
}) => {
   return (
      <>
         <div className='login-form'>
            <Form id='login-form' onSubmit={ handleSubmit }>
               <Header as='h1'>Login</Header>

               {
                  error &&
                  <Message size='small'>
                     <Message.Header>{ error.message }</Message.Header>
                     <p>Please try again!</p>
                  </Message>
               }

               <Form.Input
                  required
                  type='email'
                  name='email'
                  label='Email'
                  placeholder='sample@email.com'
                  value={ email }
                  onChange={ handleChange }
               />

               <Form.Input
                  required
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Enter Password'
                  value={ password }
                  onChange={ handleChange }
               />

               <Button type='submit' color='green'>Submit</Button>
               <span onClick={ () => changeModal() } className="modal-change-span">Don't have an account? Register now!</span> 
            </Form>
         </div>
      </>
   );
};

export default LoginComp;
