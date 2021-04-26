import React from 'react';
import LargeLayout from './LargeLayout';
import MediumLayout from './MediumLayout';
import MobileLayout from './MobileLayout';

import { Props } from './config';
import { getScreenSize } from '../../hooks/getScreenSize';

const Layout: React.FunctionComponent<Props> = ({ modalType, changeModal }) => {
   const screenSize = getScreenSize();
   let screen;

   const selectScreen = () => {
      if (screenSize == 'large') {
         screen = (
            <>
               <LargeLayout
                  changeModal={ changeModal }
                  modalType={ modalType }
               />
            </>
         );
         return screen;
      }

      if (screenSize == 'medium') {
         screen = (
            <>
               <MediumLayout
                  changeModal={ changeModal }
                  modalType={ modalType }
               />
            </>
         );
         return screen;
      } else {
         screen = (
            <>
               <MobileLayout
                  changeModal={ changeModal }
                  modalType={ modalType }
               />
            </>
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
