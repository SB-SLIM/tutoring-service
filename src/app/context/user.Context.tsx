import React, { createContext, useEffect, useState } from "react";
import { users } from "../Data/users";

interface IUserContext {
  user: Object;
}

const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: any) => {
  type User = typeof initUser;

  const initUser = {
    userID: -1,
    name: "",
    email: "",
  };

  const [user, setUser] = useState<User>(initUser);

  useEffect(() => {
    setUser(users[0]);
  }, []);

  console.log(user);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
