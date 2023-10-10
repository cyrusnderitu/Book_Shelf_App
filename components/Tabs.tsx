"use client";
import React, { useState } from "react";
import BookAbout from "./BookAbout";

const Tabs = () => {
  const [active, setActive] = useState<string>("about");

  const handleActive = (val: string) => {
    if (active === val) {
      return;
    } else {
      setActive(val);
    }
  };
  return (
    <div className=" mt-10">
      <div className="tabs">
        <a
          className={`tab tab-lifted ${
            active === "about" ? "tab-active" : null
          }`}
          onClick={() => handleActive("about")}
        >
          About
        </a>
        <a
          className={`tab tab-lifted ${
            active === "content" ? "tab-active" : null
          }`}
          onClick={() => handleActive("content")}
        >
          Table of Content
        </a>
      </div>
      {active === "about" ? <BookAbout /> : null}
    </div>
  );
};

export default Tabs;
