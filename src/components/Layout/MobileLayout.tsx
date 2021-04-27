import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';

import { Props } from './config';

const MobileLayout: React.FunctionComponent<Props> = ({ modalType, changeModal }) => {
   return (
      <div className='layout-container' id='mobile-layout'>
         <div id='avatar-container'>
            <Avatar />
         </div>

         <div id='modal-container'>
            { modalType=== 'register' && <Register changeModal={ changeModal }/> }
            { modalType=== 'login' && <Login changeModal={ changeModal }/> }
         </div>
      </div>
   );
};

export default MobileLayout;