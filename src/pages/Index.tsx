import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import CallButton from "@/components/CallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Contact />
      <CallButton />
    </div>
  );
};

export default Index;