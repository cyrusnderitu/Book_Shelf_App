"use client";
import React, { useContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContext } from "@/context/ThemeContext";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const ThemeOverlay = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(ThemeContext);
  return (
    <div data-theme={state.theme}>
      <Provider store={store}>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          {children}
        </SkeletonTheme>
      </Provider>
    </div>
  );
};

export default ThemeOverlay;
