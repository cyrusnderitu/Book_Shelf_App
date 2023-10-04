"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeOverlay = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(ThemeContext);
  return <div data-theme={state.theme}>{children}</div>;
};

export default ThemeOverlay;
