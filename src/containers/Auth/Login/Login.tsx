import React from 'react';
import LoginComp from '../../../components/Auth/Login/LoginComp';
import { Props, State, Event, Response } from './config';

class Login extends React.PureComponent<Props, State> {
   state: State = {
      email: '',
      password: '',
      loginSuccess: false,
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

      const { email, password, error, LoginSuccess } = this.state;

      return (
         <>
            <LoginComp
               email={ email }
               password={ password }
               error={ error }
            />
         </>
      );
   };
};

export default Login;