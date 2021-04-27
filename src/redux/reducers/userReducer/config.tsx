interface State {
   user: null | User,
   error: null | Error
};

interface Action {
   type: string,
   payload: { error: Error, user: User, errors: Array<Error> }
};

interface User {
   _id: string,
   name: string,
   email: string,
   profile_pic?: string,
};

interface Error {
   message: string
};

export {
   State,
   Action
};
