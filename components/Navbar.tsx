import Link from "next/link";
import React, { useContext } from "react";
import { BiBookReader } from "react-icons/bi";
// import { AiFillBook } from "react-icons/ai";
import Image from "next/image";
import Book from "../public/wired-outline-112-book-morph.gif";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-[3.5rem]">
      <div className="flex-1">
        <div className="flex items-center gap-x-3">
          <BiBookReader className="text-4xl" />
          <h2 className="font-bold text-2xl">Pages</h2>
        </div>
      </div>
      <div className="flex-none">
        <div className="flex items-center gap-x-4">
          <ul className="menu menu-horizontal px-1 font-popps text-[13px] font-semibold gap-x-6">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Genre</summary>
                <ul className={`p-2 bg-base-200`}>
                  <li>
                    <a>Horror</a>
                  </li>
                  <li>
                    <a>Sci-fi</a>
                  </li>
                  <li>
                    <a>Romance</a>
                  </li>
                  <li>
                    <a>Action</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <Link href={"/form"}>
            <button className="btn btn-outline btn-success rounded-[20px] flex items-center gapx-3 font-bold">
              {/* <AiFillBook className="text-xl" /> */}
              <Image src={Book} alt="book" />
              Add Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
