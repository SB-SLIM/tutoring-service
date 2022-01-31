import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../Data/users";

// type User = {
//   userID: number | string;
//   name: string;
//   email: string;
// };

interface IUserContext {
  user: { userID: number | string | null };
  login: Function;
  logout: () => void;
  authTokens: string;
}

const UserContext = createContext<IUserContext>({
  user: { userID: null },
  login: () => {},
  logout: () => {},
  authTokens: "",
});

const UserProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userAuth") || "{}")
  );
  const setUserAuth = (data: Object) => {
    setUser(data);
    localStorage.setItem("userAuth", JSON.stringify(data));
  };

  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens") || ""
  );
  const setTokens = (data: string) => {
    setAuthTokens(data);
    localStorage.setItem("tokens", data);
  };

  //LOGIN function
  const login = (email: string) => {
    const userTmp = users.find((u) => u.email === email);

    if (userTmp) {
      setTokens(JSON.stringify(userTmp));
      setUserAuth(userTmp);

      navigate("/find-tutor");
    } else {
      navigate("/login");
      throw new Error(`user ${email} does't exist`);
    }
  };

  //LOGOUT function
  const logout = () => {
    setUser({});
    setAuthTokens("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ authTokens, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
