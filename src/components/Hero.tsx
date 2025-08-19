import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="mb-6 leading-tight">
          Escape to <span className="text-luxury-gold">Paradise</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          Experience unparalleled luxury at our exclusive beachfront resort, where pristine shores meet world-class hospitality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-luxury text-lg px-10 py-6">
            Book Your Stay
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-10 py-6"
          >
            Explore Rooms
          </Button>
        </div>
        
        {/* Quick booking info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-light mb-2">Beachfront</h3>
            <p className="text-white/80">Direct beach access</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-light mb-2">Luxury Spa</h3>
            <p className="text-white/80">World-class wellness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-2xl font-light mb-2">Fine Dining</h3>
            <p className="text-white/80">Michelin-starred cuisine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;