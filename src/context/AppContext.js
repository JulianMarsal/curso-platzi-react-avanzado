import React from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const user = { isAuth };
  const setLogin = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };
  const logOut = () => {
    setIsAuth(false);
    window.sessionStorage.removeItem("token");
    //   useEffect(() => {
    //     __APOLLO_CLIENT__.resetStore()
    //   }, [isAuth])
    // }
  };

  return (
    <AppContext.Provider value={{ user, setLogin, logOut }}>
      {children}
    </AppContext.Provider>
  );
};
