import React from 'react';

interface Props {
   name: string,
   email: string,
   password: string,
   password2: string,
   profile_pic: string,
   registerSuccess: string,
   error: null | Error,
   changeModal: () => void,
   handleChange: (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void,
   handleSubmit: (event: React.FormEvent<HTMLFormElement>, data: FormProps) => void
};

interface Error {
   message: string
};

interface Event {
   target: Target,
   preventDefault: () => void
};

interface Target {
   name: TargetState,
   value: string
};

interface TargetState {
   name: string,
   password: string
};

interface FormProps {}

interface InputOnChangeData {}

export {
   Props,
   Event
};
