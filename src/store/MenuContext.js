import { Boogaloo } from "next/font/google";
import { createContext, useState } from "react";

const MenuContext = createContext({
  formContext: { menu: "", changeMenu: (value) => {} },
  emailCredentials: {
    userInfoValues: { email: "", password: "" },
    userInfoHandler: (value) => {},
  },
  setAuthentication: {
    value: Boolean,
    authenticationHandler: (value) => {},
  },
});

export function MenuContextProvider(props) {
  const [menuTypeValue, setMenuTypeValue] = useState({});
  const [userInfo, setUsersInfo] = useState({ email: "", password: "" });
  const [Authenticated, setIsAuthenticated] = useState(false);
  function menuTypeChanger(value) {
    setMenuTypeValue(value);
  }
  function setUserInfo(value) {
    setUsersInfo(value);
  }
  const context = {
    menu: menuTypeValue,
    changeMenu: menuTypeChanger,
  };

  const eContext = {
    userInfoValues: userInfo,
    userInfoHandler: setUserInfo,
  };

  const isAuthenticated = {
    value: Authenticated,
    authenticationHandler: setIsAuthenticated,
  };
  return (
    <MenuContext.Provider
      value={{
        menuType: context,
        emailCredentials: eContext,
        authenticateUser: isAuthenticated,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
