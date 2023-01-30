import { createContext, useContext, useState } from 'react';

interface IContext {
  state: boolean;
  changeState: (newState: boolean) => void;
}

const defaultValues = {
  state: false,
  changeState: (newState: boolean) => {
    newState;
  },
};

export const MenuMobileContext = createContext<IContext>(defaultValues);

const MenuContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultValues.state);

  const changeState = (newState: boolean) => {
    if (!newState) return;

    setState(newState);
  };

  return (
    <MenuMobileContext.Provider value={{ state, changeState }}>
      {children}
    </MenuMobileContext.Provider>
  );
};

export default MenuContextProvider;

export const useMenuMobileContext = useContext(MenuMobileContext);
