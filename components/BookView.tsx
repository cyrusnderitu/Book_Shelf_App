import Image from "next/image";
import React from "react";
import Cover from "../public/photo-1592496431122-2349e0fbc666.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Bg from "../public/blue-abstract-watercolor-background-design-png-free-vector.jpg";
import BookCard from "./BookCard";

const BookView = () => {
  return (
    <div className="">
      <div className="hero w-[calc(100%+5rem)] -ml-10 font-popps bgImg bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={Cover}
            alt="cover"
            className="mask mask-hexagon w-[500px] shadow-sm"
          />
          <div>
            <h1 className="text-4xl font-bold">The Psychology of Money</h1>
            <p className="py-6 w-3/5 text-[14px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex items-center gap-x-4">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h4 className="text-xl font-semibold">
                2.85 <span className="text-base">(35 rating)</span>
              </h4>
            </div>
            <div className="badge badge-success gap-2 my-4">
              <p className="font-semi-bold"># Top 50 in Ranking</p>
            </div>
            <div className="flex items-center gap-x-2 ">
              <button className="btn btn-success btn-outline">Read</button>
              <button className="btn btn-primary flex items-center gap-x-2">
                <AiOutlinePlusSquare />
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 h-[500px]">
        <div className="tabs">
          <a className="tab tab-lifted tab-active">About</a>
          <a className="tab tab-lifted ">Table of Content</a>
        </div>
      </div>
      <div className="my-6">
        <h4 className="text-3xl mb-3 text-bold">You May Also Like</h4>

        <div className="flex flex-wrap gap-4">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  );
};

export default BookView;
