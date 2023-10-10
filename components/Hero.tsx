import React from "react";
import Stat from "./Stat";
import { AiOutlineArrowRight } from "react-icons/ai";
import Reader from "../public/juicy-woman-is-reading-a-book-at-home.gif";
import Clock from "../public/juicy-wall-clock.png";
import Shelf from "../public/taxi-shelf-with-books-3.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" h-[calc(100%-4rem)] grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4">
      <div className="flex flex-col justify-center gap-y-10">
        <h1 className="text-5xl font-bold break-words w-4/5">
          Books are uniquely <span className="text-5xl  stroke">portable</span>{" "}
          magic
        </h1>
        <p>
          There are many variations of passengers of Lorem ipsum available, but
          the majority have suffered alteration in both form and nature
        </p>
        <div className="flex items-center gap-x-3 ">
          <button className="bg-[#5BD35B] border-none outline-none rounded-md cursor-pointer p-3 text-black font-semibold w-[180px] text-center">
            Order Today
          </button>
          <button className="border border-1 border-[#5BD35B] bg-transparent font-semibold cursor-pointer p-3 rounded-md w-[180px] justify-center text-gray-500 flex items-center gap-x-2">
            Read Free Demo
            <AiOutlineArrowRight />
          </button>
        </div>
        <Stat />
      </div>
      <div className="right  flex justify-center items-center">
        <div className="w-4/5 h-[90%]  shadow-sm rounded-md px-4 flex justify-center items-center relative">
          <Image
            src={Reader}
            alt="reader"
            className="w-[550px] mt-8"
            priority={false}
          />
          <Image
            src={Clock}
            alt="reader"
            className=" absolute top-4 w-[80px] left-0"
          />
          <Image
            src={Shelf}
            alt="reader"
            className=" absolute top-4 w-[150px] right-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
