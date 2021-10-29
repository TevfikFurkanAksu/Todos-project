import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, changeAuthStatus: changeAuthStatus }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
