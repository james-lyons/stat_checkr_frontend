import React from 'react';
import Avatar from './components/Avatar/AvatarComp';
import Layout from './components/Layout/Layout';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';
import { State } from './AppConfig';

class App extends React.PureComponent<{}, State> {

   state: State = {
      modalType: 'login'
   };

   private changeModal = () => {
      const { modalType } = this.state;

      if (modalType === 'register') {
         this.setState({
            modalType: 'login'
         });
      } else {
         this.setState({
            modalType: 'register'
         });
      };
   };

   render() {
      const { modalType } = this.state;
      const { changeModal } = this;

      return (
         <>
            <div id='app-container'>
               <Layout
                  changeModal={ changeModal }
                  modalType={ modalType }
               />
            </div>
         </>
      );
   };
};

export default App;