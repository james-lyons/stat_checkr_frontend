interface Props {
   name: string,
   email: string,
   password: string,
   password2: string,
   error: null | Error
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
