import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import WhatsAppBooking from "@/components/WhatsAppBooking";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import CallButton from "@/components/CallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlideshow />
      <WhatsAppBooking />
      <Rooms />
      <Amenities />
      <Contact />
      <CallButton />
    </div>
  );
};

export default Index;