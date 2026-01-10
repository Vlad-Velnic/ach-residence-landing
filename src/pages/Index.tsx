import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Gallery from "@/components/landing/Gallery";
import Amenities from "@/components/landing/Amenities";
import PerfectFor from "@/components/landing/PerfectFor";
import Location from "@/components/landing/Location";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <PerfectFor />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
