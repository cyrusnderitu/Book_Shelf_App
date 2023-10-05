import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export default function Home() {
  return (
    <div className="px-10">
      <div className="cont h-screen relative">
        <Navbar />
        <Hero />
        <div className="absolute bottom-10 right-8">
          <Theme />
        </div>
      </div>
      <div className="h-[500px]"></div>
      <Footer />
    </div>
  );
}
