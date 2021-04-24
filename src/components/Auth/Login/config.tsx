interface Props {
   email: string,
   password: string,
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
