import React from "react";
import Image from "next/image";
import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";
import { BookType } from "./BookCollections";

const BookCard: React.FC<BookType> = ({ name, cover, book_id }) => {
  return (
    <div className="card w-[240px] bg-base-100 shadow-xl">
      <figure className="mt-4">
        <Image src={cover} alt="coverImg" width={100} height={100} />
      </figure>
      <div className="card-body">
        <Link href={`/form/${book_id}`}>
          <h2 className="card-title flex flex-col items-start gap-x-2 text-[15px] font-bold">
            {name}
            <span className="badge badge-warning text-[10px]">NEW</span>
          </h2>
        </Link>
        <p className="text-[12px]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions flex items-center gap-x-1">
          <div className="badge badge-ghost">Adventure</div>
          <div className="badge badge-ghost">Anime</div>
          <div className="badge badge-ghost">Sci-fi</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
