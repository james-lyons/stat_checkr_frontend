import React from 'react';
import { Props } from './config';

const LoginComp: React.FunctionComponent<Props> = ({
   email, password, error
}) => {
   return (
      <>
         <div>Hallo from LoginComp</div>
      </>
   );
};

export default LoginComp;
