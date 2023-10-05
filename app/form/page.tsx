"use client";

import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";

const Form = () => {
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
