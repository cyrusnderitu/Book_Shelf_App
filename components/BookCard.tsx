import Image from "next/image";
import React from "react";
import Book from "../public/casual-life-3d-three-quarter-back-view-book-cover-mockup.png";

const BookCard = () => {
  return (
    <div className="card w-[240px] bg-base-100 shadow-xl h-fit">
      <figure>
        <Image src={Book} alt="coverImg" className="w-[100px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex items-center gap-x-2 text-[16px] font-bold">
          Harry Potter
          <span className="badge badge-secondary text-[10px]">NEW</span>
        </h2>
        <p className="text-[12px]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions flex items-center gap-x-1">
          <div className="badge badge-outline">Adventure</div>
          <div className="badge badge-outline">Anime</div>
          <div className="badge badge-outline">Sci-fi</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
