import { newUser } from './config';
import { API_URL } from '../../constants';

const userRegister = (newUser: newUser) => {
   return async dispatch => {
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

const userLogin = () => {
   console.log('HIIIIIIIII FROM USERLOGIN');
};

const userLogout = () => {
   console.log('HIIIIIIIII FROM USERLOGOUT');
};

export {
   userRegister,
   userLogin,
   userLogout
};
