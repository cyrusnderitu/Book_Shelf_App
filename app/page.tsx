"use client";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const { state } = useContext(ThemeContext);
  return (
    <main className="h-screen" data-theme={state.theme}>
      <div className="cont px-4 h-full relative">
        <Navbar />
        <div className="absolute bottom-10 right-4">
          <Theme />
        </div>
      </div>
    </main>
  );
}
