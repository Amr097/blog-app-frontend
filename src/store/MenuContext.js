import { createContext, useState } from "react";

const MenuContext = createContext({
  formContext: { menu: "", changeMenu: (value) => {} },
  emailCredentials: {
    userInfoValues: { email: "", password: "" },
    userInfoHandler: (value) => {},
  },
});

export function MenuContextProvider(props) {
  const [menuTypeValue, setMenuTypeValue] = useState({});
  const [userInfo, setUsersInfo] = useState({ email: "", password: "" });
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
  return (
    <MenuContext.Provider
      value={{ menuType: context, emailCredentials: eContext }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
