import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="cont px-10 relative h-full">
        <Navbar />
        <Hero />
        <div className="absolute bottom-10 right-8">
          <Theme />
        </div>
      </div>
    </div>
  );
}
