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
          আপনাকে স্বাগতম <span className="text-saffron">বাংলার</span> <span className="text-deep-orange">ঐতিহ্যে</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4 text-saffron font-medium">
          Shubho Bengali Homestay
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Experience authentic Bengali culture, traditional hospitality, and the warmth of a home away from home
        </p>
        
        <div className="mb-8 text-white/80">
          <p className="text-lg">• Traditional Bengali cuisine • Cultural experiences • Family atmosphere •</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-indian-luxury text-lg px-8 py-3">
            বুক করুন এখনই
          </Button>
          <Button variant="outline" className="btn-outline-indian text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
            Explore Bengali Culture
          </Button>
        </div>
        
        {/* Quick booking info */}
        
      </div>
    </section>;
};
export default Hero;