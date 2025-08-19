import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resort.jpg";
const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${heroImage})`
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="mb-6 leading-tight">
          Escape to <span className="text-luxury-gold">Paradise</span>
        </h1>
        
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          
        </div>
        
        {/* Quick booking info */}
        
      </div>
    </section>;
};
export default Hero;