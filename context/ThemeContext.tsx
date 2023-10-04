"use client";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  theme: "dark",
};
const ACTION = {
  CHANGE_THEME: "change theme",
};

type StateType = {
  theme: string;
};
type ActionType = {
  type: "change theme";
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ACTION.CHANGE_THEME:
      return {
        theme: state.theme === "light" ? "forest" : "light",
      };
    default:
      return state;
  }
};
export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
