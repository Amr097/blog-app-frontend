import { createContext, useState } from "react";

const MenuContext = createContext({ menu: String });

function MenuContextProvider(props) {
  const [menuType, setMenuType] = useState({});
  const context = {
    menu: menuType,
  };
  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}
