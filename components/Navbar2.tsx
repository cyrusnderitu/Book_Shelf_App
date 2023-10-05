import Image from "next/image";
import React from "react";
import Avatar from "../public/casual-life-3d-profile-picture-of-man-in-green-shirt-and-orange-hat.png";
import Link from "next/link";
import { BiBookReader } from "react-icons/bi";

const Navbar2 = () => {
  return (
    <div className="navbar bg-base-100 font-popps sticky">
      <div className="flex-1">
        <Link href={"/"}>
          <div className="flex items-center gap-x-3">
            <BiBookReader className="text-4xl" />
            <h2 className="font-bold text-2xl">Pages</h2>
          </div>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={Avatar} alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>My Collections</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
