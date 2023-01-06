import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Books });

export const AppContextProvider = ({
  children,
  menu,
  firstCategory
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [stateMenu, setStateMenu] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setStateMenu(newMenu);
  } ;

  return (
    <AppContext.Provider value={{ menu: stateMenu, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);