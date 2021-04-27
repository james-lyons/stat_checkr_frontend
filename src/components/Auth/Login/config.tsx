interface Props {
   email: string,
   password: string,
   loginSuccess: boolean,
   error: null | Error,
   changeModal: () => void
   handleChange: () => void
   handleSubmit: (event: Event) => void
};

interface Error {
   message: string
};

interface Event {
   target: Target
};

interface Target {
   name: TargetState,
   value: string
};

interface TargetState {
   name: string,
   password: string
};

export {
   Props
};
