"use client";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Cover from "../public/photo-1592496431122-2349e0fbc666.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import BookCard from "./BookCard";
import Tabs from "./Tabs";
import { useParams } from "next/navigation";
import { fetchBookById } from "@/hooks/fetchData";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

const BookView = () => {
  const { view } = useParams();
  const { book: book } = useSelector(
    (state: RootState) => state.reducer.bookById
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBookById("56597885"));
  }, [dispatch, view]);
  const obj = { ...book };

  console.log(obj);
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
            <h1 className="text-4xl font-bold stroke">
              The Psychology of Money
            </h1>
            <p className="py-6 text-[14px]">
              Author: <span className="uppercase font-bold">morgan Housel</span>
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
            <div className="badge badge-warning gap-2 my-4">
              <p className="font-semi-bold"># Top 50 in Ranking</p>
            </div>
            <div className="flex items-center gap-x-2 ">
              <button className="btn btn-success btn-outline">Read</button>
              <button className="btn btn-success flex items-center gap-x-2">
                <AiOutlinePlusSquare />
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
      <Tabs />
      <div className="my-6">
        <h4 className="text-3xl mb-3 text-bold">You May Also Like</h4>

        <div className="flex flex-wrap gap-4"></div>
      </div>
    </div>
  );
};

export default BookView;
