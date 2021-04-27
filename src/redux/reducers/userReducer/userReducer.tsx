import { State, Action } from './config';

function userReducer(state: State = {
   user: {
      _id: null,
      name: null,
      email: null,
      profile_pic: null
   },
   error: null
}, action: Action) {
   
   switch(action.type) {   
      case "USER_LOGIN_FULFILLED":
         return { ...state, errors: null, user: action.payload.user };
      
      case "USER_LOGIN_REJECTED": 
         return { ...state, errors: action.payload.error }
   
      case "USER_LOGOUT_FULFILLED":
         return { ...state, errors: null };
      
      case "USER_LOGOUT_REJECTED": 
         return { ...state, errors: action.payload.error }
      
      default:
         return { ...state };
   };
};

export default userReducer;
