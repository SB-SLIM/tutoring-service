import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../Data/users";
import userDefaultImg from "../../assets/images/1x/img-user-default-1x.png";

type User = {
  userID: number | string | null;
  name: string | undefined;
  email: string | undefined;
  picture: string | undefined;
};

interface IUserContext {
  user: User;
  login: Function;
  logout: () => void;
  authTokens: string;
  err: string;
}

const UserContext = createContext<IUserContext>({
  user: {
    userID: null,
    name: undefined,
    email: undefined,
    picture: userDefaultImg,
  },
  login: () => {},
  logout: () => {},
  authTokens: "",
  err: "",
});

const UserProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    userID: null,
    name: undefined,
    email: undefined,
    picture: userDefaultImg,
  });
  const [err, setErr] = useState("");

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
      setUser(userTmp);

      navigate("/find-tutor");
    } else {
      navigate("/login");
      setErr(`user ${email} does't exist`);
      throw new Error(`user ${email} does't exist`);
    }
  };

  //LOGOUT function
  const logout = () => {
    setUser({
      userID: null,
      name: undefined,
      email: undefined,
      picture: userDefaultImg,
    });
    setAuthTokens("");
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  return (
    <UserContext.Provider value={{ authTokens, user, login, logout, err }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
