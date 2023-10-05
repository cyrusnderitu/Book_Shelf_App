import Image from "next/image";
import React from "react";
import Book from "../public/casual-life-3d-three-quarter-back-view-book-cover-mockup.png";
import Link from "next/link";

const BookCard = () => {
  return (
    <div className="card w-[240px] bg-base-100 shadow-xl">
      <figure className="mt-4">
        <Image src={Book} alt="coverImg" className="w-[100px]" />
      </figure>
      <div className="card-body">
        <Link href={"/form/1"}>
          <h2 className="card-title flex items-center gap-x-2 text-[16px] font-bold">
            Harry Potter
            <span className="badge badge-warning text-[10px]">NEW</span>
          </h2>
        </Link>
        <p className="text-[12px]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions flex items-center gap-x-1">
          <div className="badge badge-secondary">Adventure</div>
          <div className="badge badge-secondary">Anime</div>
          <div className="badge badge-secondary">Sci-fi</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
