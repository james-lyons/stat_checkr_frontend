interface Props {
   name: string,
   email: string,
   password: string,
   password2: string,
   error: null | Error,
   changeModal: () => void;
   handleChange: (event: Event) => void;
   handleSubmit: (event: Event) => Promise<void>;
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

export {
   Props,
   Event
};
