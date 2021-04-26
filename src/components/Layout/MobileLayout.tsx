import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';

import { Props } from './config';

const MobileLayout: React.FunctionComponent<Props> = ({}) => {
   return (
      <div className='layout-container' id='mobile-layout'>
         <Avatar />
         <Register />
         <Login />
      </div>
   );
};

export default MobileLayout;