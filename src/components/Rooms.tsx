import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import suiteImage from "@/assets/suite-ocean.jpg";

const Rooms = () => {
  const rooms = [
    {
      name: "Ocean View Suite",
      description: "Spacious suite with panoramic ocean views, marble bathroom, and private balcony",
      price: "From $450/night",
      features: ["King bed", "Ocean view", "Marble bathroom", "Private balcony"],
      image: suiteImage,
    },
    {
      name: "Beachfront Villa",
      description: "Luxury villa steps from the beach with direct access and premium amenities",
      price: "From $850/night", 
      features: ["2 bedrooms", "Beach access", "Private pool", "Butler service"],
      image: suiteImage,
    },
    {
      name: "Presidential Suite",
      description: "Ultimate luxury with expansive living areas and exclusive resort privileges",
      price: "From $1,200/night",
      features: ["3 bedrooms", "Living room", "Private chef", "Exclusive access"],
      image: suiteImage,
    },
  ];

  return (
    <section id="rooms" className="section-padding bg-luxury-cream">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="mb-6">Luxury Accommodations</h2>
          <p className="text-xl text-luxury-grey max-w-3xl mx-auto leading-relaxed">
            Each room and suite at Serene Shores is designed to provide the ultimate in comfort and elegance, 
            featuring premium amenities and breathtaking views.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="card-hover bg-white border-0 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">{room.name}</h3>
                <p className="text-luxury-grey mb-4 leading-relaxed">{room.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-luxury-bronze">Features</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-luxury-grey">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full btn-luxury">
                  View Details & Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline-luxury">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;