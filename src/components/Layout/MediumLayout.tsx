import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';

import { Props } from './config';

const MediumLayout: React.FunctionComponent<Props> =({}) => {
   return (
      <div className='layout-container' id='medium-layout'>
         <Avatar />
         <Register />
         <Login />
      </div>
   );
};

export default MediumLayout;