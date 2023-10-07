"use client";
import { useEffect } from "react";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchData } from "@/hooks/fetchData";

const Form = () => {
  const { books, loading } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }
  console.log("DATA FETCHED: ", books);
  return (
    <div className="px-10 relative">
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-wrap gap-4 items-start h-fit">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
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
