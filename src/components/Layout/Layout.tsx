import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';

import { getScreenSize } from '../../hooks/getScreenSize';

const Layout: React.FunctionComponent<{}> = ({}) => {
   const screenSize = getScreenSize();
   let screen;

   const selectScreen = () => {
      if (screenSize == 'large') {
         screen = (
            <div>
               hello from large
            </div>
         );
         return screen;
      }

      if (screenSize == 'medium') {
         screen = (
            <div>
               hello from medium
            </div>
         );
         return screen;
      } else {
         screen = (
            <div>
               hello from mobile
            </div>
         );
         return screen;
      }
   }

   return (
      <>
         { screenSize && selectScreen() }
      </>
   );
};

export default Layout;
