interface newUser {
   name: string,
   email: string,
   password: string,
   password2: string,
};

interface User {
   email: string,
   password: string
};

export {
   newUser,
   User
};
