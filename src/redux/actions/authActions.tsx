import { newUser, User } from './config';
import { API_URL } from '../../constants';
import { Dispatch } from 'redux';

const userRegister = (newUser: newUser) => {
   return async (dispatch: Dispatch) => {
      try {
         let res = await fetch(`${ API_URL }/auth/register`,
            {
               method: 'POST',
               credentials: 'include',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(newUser)
            }
         );

         const data = await res.json();

         if (data.status >= 400) {
            return dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: data });
         } else {
            return dispatch({ type: 'USER_REGISTRATION_FULFILLED', payload: data });
         };
      } catch (error) {
         dispatch({ type: 'USER_REGISTRATION_REJECTED', payload: error });
      };
   };
};


const userLogin = (user: User) => {
   console.log('logging userlogin', user);

   return async (dispatch: Dispatch) => {
      console.log('logging userLogin 1');

      try {
         let res = await fetch(`${ API_URL }/auth/login`,
            {
               method: 'POST',
               credentials: 'include',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(user)
            }
         );

         const data = await res.json();

         console.log('logging data 1', data);

         if (data.status >= 400) {
            dispatch({ type: 'USER_LOGIN_REJECTED', payload: data});
            return { error: data.error };
         };

         console.log('logging data 2', data);
         localStorage.setItem('uid', data.data._id);
         
         return dispatch({ type: 'USER_LOGIN_FULFILLED', payload: data });
         
      } catch (error) {
         console.log('logging login error', error);
         return dispatch({ type: 'USER_LOGIN_REJECTED', payload: error });
      };
   };
};

const userLogout = () => {
   console.log('HIIIIIIIII FROM USERLOGOUT');
};

export {
   userRegister,
   userLogin,
   userLogout
};
