"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const ThemeBtn = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <input type="checkbox" onClick={() => dispatch({ type: "change theme" })} />
  );
};

export default ThemeBtn;
