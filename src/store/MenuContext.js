import { createContext, useState } from "react";

const MenuContext = createContext({ menu: "", changeMenu: (value) => {} });

export function MenuContextProvider(props) {
  const [menuTypeValue, setMenuTypeValue] = useState({});
  function menuTypeChanger(value) {
    setMenuTypeValue(value);
  }
  const context = {
    menu: menuTypeValue,
    changeMenu: menuTypeChanger,
  };
  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
