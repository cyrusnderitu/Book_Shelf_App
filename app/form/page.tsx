"use client";

import BookCard from "@/components/BookCard";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";

const Form = () => {
  return (
    <div className="px-10 relative">
      <Navbar2 />
      <div className="flex h-[calc(100%-4.5rem)]">
        <Sidebar />
        <div className="w-full  h-full flex flex-wrap gap-6 px -10">
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
      <div className="bottom-10 right-8 fixed">
        <Theme />
      </div>
    </div>
  );
};

export default Form;
