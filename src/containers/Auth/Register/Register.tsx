import React from 'react';
import RegisterComp from '../../../components/Auth/Register/RegisterComp';
import { Props, State, Event, Response } from './config';

class Register extends React.PureComponent<Props, State> {
   state: State = {
      name: '',
      email: '',
      password: '',
      password2: '',
      passwordType: 'password',
      registerSuccess: false,
      error: null
   };

   private handleChange = (event: Event) => {
      this.setState({
         [event.target.name]: event.target.value
      });
   };

   private handleSubmit = async (event: Event) => {
      event.preventDefault();
      
   };

   render() {

      const { name, email, password, password2, passwordType, error, registerSuccess } = this.state;

      return (
         <>
            <RegisterComp
               name={ name }
               email={ email }
               password={ password }
               password2={ password2 }
               error={ error }
            />
         </>
      );
   };
};

export default Register;