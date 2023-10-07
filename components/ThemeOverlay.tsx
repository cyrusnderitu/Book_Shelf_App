"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const ThemeOverlay = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(ThemeContext);
  return (
    <div data-theme={state.theme}>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ThemeOverlay;
