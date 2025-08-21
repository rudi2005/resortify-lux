import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/bengali-homestay-exterior.jpg";
import scenicImage from "@/assets/bengali-scenic-village.jpg";
import culturalImage from "@/assets/bengali-cultural-activity.jpg";
const HeroSlideshow = () => {
  const slides = [{
    image: heroImage,
    title: "আপনাকে স্বাগতম বাংলার ঐতিহ্যে",
    subtitle: "Shubho Bengali Homestay",
    description: "Experience authentic Bengali culture and traditional hospitality"
  }, {
    image: scenicImage,
    title: "প্রকৃতির কোলে শান্তি",
    subtitle: "Peaceful Village Setting",
    description: "Surrounded by lush paddy fields and serene landscapes"
  }, {
    image: culturalImage,
    title: "সাংস্কৃতিক ঐতিহ্য",
    subtitle: "Cultural Heritage Experience",
    description: "Immerse yourself in traditional Bengali customs and stories"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  return <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${slide.image})`
      }} />
          <div className="absolute inset-0 hero-overlay" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
              <h1 className="mb-4 leading-tight text-slate-50">{slide.title}</h1>
              <h2 className="text-2xl md:text-3xl mb-4 text-saffron font-medium">
                {slide.subtitle}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="btn-indian-luxury text-lg px-8 py-3">
                  বুক করুন এখনই
                </Button>
                <Button variant="outline" className="btn-outline-indian text-lg px-8 py-3 border-white hover:bg-white text-slate-950">
                  Explore Culture
                </Button>
              </div>
            </div>
          </div>
        </div>)}
      
      {/* Navigation */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-smooth p-2">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-smooth p-2">
        <ChevronRight size={32} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-smooth ${index === currentSlide ? 'bg-saffron' : 'bg-white/50'}`} />)}
      </div>
    </section>;
};
export default HeroSlideshow;