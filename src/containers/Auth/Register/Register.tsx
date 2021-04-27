import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Props, State, Event, Response } from './config';
import { userRegister } from '../../../redux/actions/authActions';

import RegisterComp from '../../../components/Auth/Register/RegisterComp';

class Register extends React.PureComponent<Props, State> {
   state: State = {
      name: '',
      email: '',
      password: '',
      password2: '',
      passwordType: 'password',
      registerSuccess: false,
      profile_pic: 'https://www.sackettwaconia.com/wp-content/uploads/default-profile.png',
      error: null
   };

   private handleChange = (event: Event) => {
      this.setState({
         [event.target.name]: event.target.value
      });
      console.log('this.state', this.state);
   };

   private handleSubmit = async (event: Event) => {
      event.preventDefault();

      console.log(this.state);
      
      const { userRegister } = this.props;
      const { name, email, profile_pic, password, password2 } = this.state;
      const newUser = { name, email, profile_pic, password, password2 };

      const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
      const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      let includesNumber = false;
      let includesLetter = false;
      let includesSymbol = false;

      letters.forEach(letter => {
         if (password.split('').includes(letter)) {
            return includesLetter = true;
         };
         return;
      });

      numbers.forEach(number => {
         if(password.split('').includes(number)) {
            return includesNumber = true;
         };
         return;
      });

      symbols.forEach(symbol => {
         if(password.split('').includes(symbol)) {
            return includesSymbol = true;
         };
         return;
      });

      if (password.length < 8 || password.length > 16) {
         this.setState({ error: { message: 'Password must be 8 to 16 characters long' }});
         console.log('error 1');
         return;
      };

      if (password2.length < 8 || password2.length > 16) {
         this.setState({ error: { message: 'Password must be 8 to 16 characters long' }});
         console.log('error 2');
         return;
      };

      if (!includesNumber || !includesLetter || !includesSymbol) {
         this.setState({ error: { message: 'Password must include at least one letter, number, and symbol' }});
         console.log('error 3');
         return;
      }

      if (password !== password2) {
         this.setState({ error: { message: 'Passwords must match' }});
         console.log('error 4');
         return;
      };

      const res:Response = await userRegister(newUser);

      console.log('logging res', res);

      if (res.type === 'USER_REGISTRATION_REJECTED') {
         this.setState({ error: res.payload.error });
         console.log('error 5');
         return;
      };

      if (res.type === 'USER_REGISTRATION_FULFILLED') {
         await this.setState({ error: null, registerSuccess: true })
      };
      console.log(this.state);
      return;
   };

   render() {
      
      const { handleChange, handleSubmit } = this;
      const { changeModal } = this.props;
      const { name, email, password, password2, profile_pic, error, registerSuccess } = this.state;

      return (
         <>
            <RegisterComp
               error={ error }
               name={ name }
               email={ email }
               password={ password }
               password2={ password2 }
               profile_pic={ profile_pic }
               registerSuccess={ registerSuccess }
               changeModal={ changeModal }
               handleChange={ handleChange }
               handleSubmit={ handleSubmit }
            />
         </>
      );
   };
};

export default connect(null, { userRegister })(Register);