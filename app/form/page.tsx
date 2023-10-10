"use client";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchData } from "@/hooks/fetchData";
import SkeletonCard from "@/components/SkeletonCard";

export type BookType = {
  author: string;
  book_id: number;
  cover: string;
  name: string;
  url: string;
};

const Form = () => {
  const { books, loading } = useSelector(
    (state: RootState) => state.reducer.book
  );
  const [active, setActive] = useState("1");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const perPage = 8;

  const page = parseInt(active);
  const first = (page - 1) * perPage;
  const last = first + perPage;
  const data: BookType[] = books?.slice(first, last);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.value);
  };
  return (
    <div className="px-10 relative">
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className=" my-4 relative">
          <div className="w-full flex flex-wrap gap-4 items-start h-fit">
            {loading &&
              Array(8)
                .fill("x")
                .map((item) => {
                  return <SkeletonCard key={item} />;
                })}
            {data?.map((book) => {
              return <BookCard key={book.book_id} {...book} />;
            })}
          </div>
          <div className="absolute flex justify-center bottom-4 w-full ">
            <div className="tabs  w-fit">
              <button
                value="1"
                className={`tab tab-bordered ${
                  active === "1" ? "tab-active" : null
                }`}
                onClick={handleClick}
              >
                1
              </button>
              <button
                value="2"
                className={`tab tab-bordered ${
                  active === "2" ? "tab-active" : null
                }`}
                onClick={handleClick}
              >
                2
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="bottom-10 right-8 fixed">
        <Theme />
      </div>
    </div>
  );
};

export default Form;
