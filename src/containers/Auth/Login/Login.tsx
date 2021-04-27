import React from 'react';
import { connect } from 'react-redux';
import { Props, State, Event, Response } from './config';
import { userLogin } from '../../../redux/actions/authActions';

import LoginComp from '../../../components/Auth/Login/LoginComp';

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

      const { email, password } = this.state;
      const { userLogin } = this.props;
      const user = { email, password };

      try {
         const res: Response = await userLogin(user);
         console.log('logging res', res);

         if (res.error) {
            this.setState({ error: res.error });
            return;
         };
         // if () {
         //    this.setState({ error: null });
         //    console.log('loggin successful')
         // };

      } catch (error) {
         console.log('logging login error', error);
         this.setState({ error });
         return;
      };
   };

   render() {

      const { changeModal } = this.props;
      const { handleChange, handleSubmit } = this;
      const { email, password, error, loginSuccess } = this.state;

      return (
         <>
            <LoginComp
               email={ email }
               password={ password }
               loginSuccess={ loginSuccess }
               error={ error }
               changeModal={ changeModal }
               handleChange={ handleChange }
               handleSubmit={ handleSubmit }
            />
         </>
      );
   };
};

export default connect(null, { userLogin })(Login);