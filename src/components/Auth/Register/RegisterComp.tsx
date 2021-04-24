import React from 'react';
import { Props } from './config';

const RegisterComp: React.FunctionComponent<Props> = ({
   name, email, password, password2, error
}) => {
   return (
      <>
         <div>Hallo from RegisterComp</div>
      </>
   );
};

export default RegisterComp;
