import React from 'react';
import sample_avatar from '../../files/sample_avatar.png';

const Avatar: React.FunctionComponent<{}> = ({}) => {
   return (
      <>
         <div id='avatar-component'>
            <img id='sample-avatar' src={ sample_avatar } alt='sample avatar' />
         </div>
      </>
   );
};

export default Avatar;
