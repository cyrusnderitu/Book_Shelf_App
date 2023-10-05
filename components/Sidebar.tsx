import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className=" h-[calc(100%-4.5rem)] ">
      <ul className="menu  w-56 h-full font-popps rounded-tr-md rounded-br-md">
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
  );
};

export default Sidebar;
