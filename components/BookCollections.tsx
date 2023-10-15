"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useState, useEffect } from "react";
import { fetchBooks } from "../hooks/fetchData";
import SkeletonCard from "./SkeletonCard";
import BookCard from "./BookCard";

export type BookType = {
  author: string;
  book_id: number;
  cover: string;
  name: string;
  url: string;
};

const BookCollections = () => {
  const { books, loading } = useSelector(
    (state: RootState) => state.reducer.books
  );
  const [active, setActive] = useState("1");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // PAGINATION
  const perPage = 8;

  const page = parseInt(active);
  const first = (page - 1) * perPage;
  const last = first + perPage;
  const data: BookType[] = books?.slice(first, last);

  // DUMMY ARRAY
  const newArray = Array(perPage).fill(null);
  const arr = newArray.map((_, index) => `Value_${index}`);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.value);
  };
  return (
    <div>
      <div className="w-full flex flex-wrap gap-4 items-start h-fit">
        {loading === true
          ? arr.map((item) => {
              return <SkeletonCard key={item} />;
            })
          : null}
        {data?.map((book) => {
          return <BookCard key={book.book_id} {...book} />;
        })}
      </div>
      <div className="absolute bottom-4 w-full ">
        <div className="tabs flex justify-center">
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
  );
};

export default BookCollections;
