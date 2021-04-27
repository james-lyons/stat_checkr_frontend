import React, { MouseEvent } from 'react';
import { Props, Event } from './config';
import { Form, Button, Header, Message, Image } from 'semantic-ui-react'

const RegisterComp: React.FunctionComponent<Props> = ({
   error,
   name,
   email,
   password,
   password2,
   profile_pic,
   registerSuccess,
   changeModal,
   handleChange,
   handleSubmit
}) => {

   return (
      <div
         id='register-container'
      >

         <Form id='register-form' onSubmit={ handleSubmit }>
               <Header as='h1'>Register</Header>

               {
                  registerSuccess &&
                  <Message>
                     Thank you for signing up!
                  </Message>
               }

               {
                  error &&
                  <Message size='small'>
                     <Message.Header>{ error.message }</Message.Header>
                     <p>Please try again!</p>
                  </Message>
               }

               <Form.Input
                  required
                  type='text'
                  name='name'
                  label='Name'
                  placeholder='John Doe'
                  value={ name }
                  onChange={ handleChange }
               />

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

               <Form.Input
                  required
                  type='password'
                  name='password2'
                  label='Re-enter Password'
                  placeholder='Enter Password'
                  value={ password2 }
                  onChange={ handleChange }
               />

               <Form.Input
                  required
                  type='text'
                  name='profile_pic'
                  label='Profile Pic'
                  placeholder='Add a link to a profile picture here'
                  value={ profile_pic }
                  onChange={ handleChange }
               />

               <Image src={ profile_pic } circular size='mini' alt='profile pic'/>
               <br />

               <Button type='submit' color='green'>Submit</Button>
               <span onClick={ () => changeModal() } className="modal-change-span">Don't have an account? Register now!</span> 
            </Form>
      </div>
   );
};

export default RegisterComp;
