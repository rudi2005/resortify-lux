import { Waves, Dumbbell, Utensils, Wifi, Car, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import spaImage from "@/assets/spa-wellness.jpg";
import restaurantImage from "@/assets/restaurant-dining.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Infinity Pool & Spa",
      description: "Relax in our stunning infinity pool overlooking the ocean, or rejuvenate at our world-class spa with signature treatments.",
      image: spaImage,
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Experience culinary excellence at our Michelin-starred restaurant featuring fresh, locally-sourced ingredients.",
      image: restaurantImage,
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "State-of-the-art fitness center, yoga pavilion, and personal training services available 24/7.",
      image: spaImage,
    },
    {
      icon: Wifi,
      title: "Premium Wi-Fi",
      description: "Complimentary high-speed internet throughout the resort for business and leisure travelers.",
      image: null,
    },
    {
      icon: Car,
      title: "Concierge Services",
      description: "24/7 concierge, valet parking, airport transfers, and personalized local excursion planning.",
      image: null,
    },
    {
      icon: TreePine,
      title: "Private Beach",
      description: "Exclusive access to pristine white sand beaches with complimentary water sports and beach service.",
      image: null,
    },
  ];

  return (
    <section id="amenities" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="mb-6">Resort Amenities</h2>
          <p className="text-xl text-luxury-grey max-w-3xl mx-auto leading-relaxed">
            Discover a world of luxury with our exceptional amenities designed to exceed your every expectation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="card-hover bg-white border-0 overflow-hidden">
              {amenity.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-luxury hover:scale-110"
                  />
                </div>
              )}
              
              <CardContent className={`p-6 ${!amenity.image ? 'pt-8' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium">{amenity.title}</h3>
                </div>
                
                <p className="text-luxury-grey leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Amenity Highlight */}
        <div className="mt-16 bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light mb-6">Award-Winning Spa</h3>
              <p className="text-luxury-grey mb-6 leading-relaxed">
                Our signature spa offers a tranquil sanctuary where ancient wellness traditions meet modern luxury. 
                Indulge in bespoke treatments designed to restore balance and rejuvenate your spirit.
              </p>
              <ul className="space-y-2 text-luxury-grey">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                  Couples massage suites with ocean views
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                  Traditional healing and modern wellness therapies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                  Private relaxation areas and hydrotherapy pools
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img 
                src={spaImage} 
                alt="Luxury Spa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;