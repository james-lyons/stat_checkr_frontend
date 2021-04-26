import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';

import { Props } from './config';

const LargeLayout: React.FunctionComponent<Props> = ({ modalType, changeModal }) => {



   return (
      <div className='layout-container' id='large-layout'>
         <Avatar />

         { modalType=== 'register' && <Register changeModal={ changeModal }/> }
         { modalType=== 'login' && <Login /> }
      </div>
   );
};

export default LargeLayout;