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
          Welcome to <span className="text-saffron">Royal</span> <span className="text-deep-orange">Heritage</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Experience the grandeur of Indian hospitality with authentic luxury and timeless traditions
        </p>
        
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-indian-luxury text-lg px-8 py-3">
            Book Your Royal Stay
          </Button>
          <Button variant="outline" className="btn-outline-indian text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
            Explore Heritage
          </Button>
        </div>
        
        {/* Quick booking info */}
        
      </div>
    </section>;
};
export default Hero;