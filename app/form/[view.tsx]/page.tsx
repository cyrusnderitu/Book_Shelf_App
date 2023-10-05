import BookView from "@/components/BookView";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Theme from "@/components/Theme";
import React from "react";

const page = () => {
  return (
    <div className="px-10 relative">
      <Navbar2 />
      <BookView />
      <Footer />
      <div className="bottom-10 right-8 fixed">
        <Theme />
      </div>
    </div>
  );
};

export default page;
