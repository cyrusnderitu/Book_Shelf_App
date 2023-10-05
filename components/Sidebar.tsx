import Image from "next/image";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import SideImg from "../public/undraw_reading_time_re_phf7.svg";
import MenuBtn from "./MenuBtn";
const Sidebar = () => {
  return (
    <div className="p-2">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden absolute right-8 top-2"
          >
            Menu
            {/* <MenuBtn /> */}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  w-48 font-popps">
            <li>
              <a>Top Ranking</a>
            </li>
            <li>
              <details open>
                <summary>Fan-Fav Ranking</summary>
                <ul className="grid grid-col-3">
                  <li>
                    <a className="flex items-center gap-x-1">
                      <BsFillStarFill className="fill-yellow-300" />
                      Popular
                    </a>
                  </li>
                  <li>
                    <a>item 2</a>
                  </li>
                  <li>
                    <a>item 3</a>
                  </li>
                  <li>
                    <a>item 4</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>Comics Ranking</summary>
                <ul>
                  <li>
                    <a className="flex items-center gap-x-1">
                      <BsFillStarFill className="fill-yellow-300" />
                      Popular
                    </a>
                  </li>
                  <li>
                    <a>level 3 item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>Novel Ranking</summary>
                <ul>
                  <li>
                    <a className="flex items-center gap-x-1">
                      <BsFillStarFill className="fill-yellow-300" />
                      Popular
                    </a>
                  </li>
                  <li>
                    <a>level 3 item 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="font-popps my-8">
        <p className="text-[14px] break-words">
          #There is never an ending to Knowledge#
        </p>
        <Image src={SideImg} alt="image" className="w-[250px]" />
        <button className="btn btn-success mt-4 w-full">Subscribe</button>
      </div>
    </div>
  );
};

export default Sidebar;
