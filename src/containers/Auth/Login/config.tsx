interface State {
   email: string,
   password: string,
   error: null | Error,
   loginSuccess: boolean
};

interface Props {
   history: History,
   error: null | { message: string }
};

interface User {
   email: string,
   password: string
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
   email: string,
   password: string,
};

interface Response {
   type: string,
   payload: Payload
};

interface Payload {
   errors: Array<Error>,
   message: string,
   status: number
};

interface Error {
   message: string
};

interface History {
   push: (location: string) => void
};

export {
   State,
   Props,
   Event,
   Response
};
