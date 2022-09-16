import { createContext } from 'react';

export const HeaderDispatchContext = createContext<HeaderDispatchContextProps>({
  setActiveItem: () => {},
  openDrawer: () => {},
});

export const HeaderStateContext = createContext<HeaderStateProps>({
  activeItem: 'dashboard',
  drawerOpen: false,
});

export interface HeaderDispatchContextProps {
  setActiveItem: (item: string) => void;
  openDrawer: (open: boolean) => void;
}

export interface HeaderStateProps {
  activeItem: string;
  drawerOpen: boolean;
}
