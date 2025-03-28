import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";
import BookCollections from "@/components/BookCollections";

const Form = () => {
  return (
    <div className="px-10 relative">
      <Navbar2 />
      <div className="flex">
        <Sidebar />
        <div className=" my-4 relative">
          <BookCollections />
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
