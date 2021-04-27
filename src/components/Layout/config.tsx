interface Props {
   user: User,
   modalType: string,
   changeModal: () => void
};

interface ReduxState {
   userReducer: UserReducer 
};

interface UserReducer {
   user: User
};

interface User {
   _id: string,
   name: string,
   email: string,
   profile_pic?: string
}

export {
   Props,
   User,
   ReduxState
};
