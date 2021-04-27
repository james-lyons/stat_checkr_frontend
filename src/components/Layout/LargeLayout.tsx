import React from 'react';
import Avatar from '../Avatar/AvatarComp';
import Register from '../../containers/Auth/Register/Register';
import Login from '../../containers/Auth/Login/Login';
import LandingComp from '../Landing/LandingComp';

import { connect } from 'react-redux';
import { Props, ReduxState } from './config';

const LargeLayout: React.FunctionComponent<Props> = ({ user, modalType, changeModal }) => {
   const uid = localStorage.getItem('uid');

   const loggedIn = () => {
      return (
         <>
            <Avatar />
            <LandingComp />
         </>
      )
   };

   const notLoggedIn = () => {
      return (
         <>
            <Avatar />
            <LandingComp />
            { modalType=== 'register' && <Register changeModal={ changeModal }/> }
            { modalType=== 'login' && <Login changeModal={ changeModal }/> }
         </>
      )
   }

   return (
      <div className='layout-container' id='large-layout'>
         {/* { user && loggedIn() } */}
         {/* { uid && notLoggedIn() } */}

            <Avatar />
            {/* <LandingComp /> */}
            { modalType=== 'register' && <Register changeModal={ changeModal }/> }
            { modalType=== 'login' && <Login changeModal={ changeModal }/> }
      </div>
   );
};

const mapStateToProps = (state: ReduxState) => {
   return {
      user: state.userReducer.user
   };
};

export default connect(mapStateToProps, null)(LargeLayout);
