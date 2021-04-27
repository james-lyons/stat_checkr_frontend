interface State {
   email: string,
   password: string,
   loginSuccess: boolean,
   error: null | Error,
};

interface Props {
   history: History,
   error: null | { message: string },
   changeModal: () => void,
   userLogin: (user: User) => Promise<void>
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
   // type?: string,
   // status?: number,
   // payload?: Payload,
   error: Error
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
