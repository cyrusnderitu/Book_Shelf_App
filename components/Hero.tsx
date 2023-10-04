import React from "react";
import Stat from "./Stat";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" h-[calc(100%-4rem)] grid grid-cols-2 gap-x-4">
      <div className="flex flex-col justify-center gap-y-10">
        <h1 className="text-5xl font-bold break-words w-4/5">
          Books are uniquely{" "}
          <span className="text-5xl text-green-500">portable</span> magic
        </h1>
        <p>
          There are many variations of passengers of Lorem ipsum available, but
          the majority have suffered alteration in both form and nature
        </p>
        <div className="flex items-center gap-x-3 ">
          <button className="bg-green-400 border-none outline-none rounded-md cursor-pointer p-3 text-black font-semibold w-[180px] text-center">
            Order Today
          </button>
          <button className="border border-1 border-green-400 bg-transparent cursor-pointer p-3 rounded-md w-[180px] justify-center text-gray-500 flex items-center gap-x-2">
            Read Free Demo
            <AiOutlineArrowRight />
          </button>
        </div>
        <Stat />
      </div>
      <div className="right  flex justify-center items-center">
        <div className="w-4/5 h-[90%] bg-gray-200 shadow-md rounded-sm px-4"></div>
      </div>
    </div>
  );
};

export default Hero;
