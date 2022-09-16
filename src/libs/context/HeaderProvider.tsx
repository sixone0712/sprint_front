import React, { useContext, useMemo, useReducer, useState } from 'react';
import { HeaderDispatchContext, HeaderStateContext, HeaderStateProps } from './HeaderContext';

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    activeItem: 'dashboard',
    drawerOpen: false,
  });

  const setActiveItem = (item: string) => {
    dispatch({ type: 'SET_ACTIVE_ITEM', payload: item });
  };

  const openDrawer = (open: boolean) => {
    dispatch({ type: 'OPEN_DRAWER', payload: open });
  };

  const setMethod = useMemo(() => ({ setActiveItem, openDrawer }), []);

  return (
    <HeaderStateContext.Provider value={state}>
      <HeaderDispatchContext.Provider value={setMethod}>{children}</HeaderDispatchContext.Provider>
    </HeaderStateContext.Provider>
  );
};

type Action = { type: 'SET_ACTIVE_ITEM'; payload: string } | { type: 'OPEN_DRAWER'; payload: boolean };

const reducer = (state: HeaderStateProps, action: Action): HeaderStateProps => {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return {
        ...state,
        activeItem: action.payload,
      };
    case 'OPEN_DRAWER':
      return {
        ...state,
        drawerOpen: action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const useHeaderState = () => {
  const state = useContext(HeaderStateContext);

  if (!state) throw new Error('Cannot find HeaderStateContext.Provider'); // 유효하지 않을땐 에러를 발생
  return state;
};

export function useHeaderDispatch() {
  const dispatch = useContext(HeaderDispatchContext);
  if (!dispatch) throw new Error('Cannot find HeaderDispatchContext.Provider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}

export default HeaderProvider;
