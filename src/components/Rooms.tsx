import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import suiteImage from "@/assets/suite-ocean.jpg";
const Rooms = () => {
  const rooms = [{
    name: "শান্তি ঘর (Shanti Room)",
    description: "Peaceful room with traditional Bengali decor, comfortable bedding, and garden views",
    price: "₹2,500/night",
    features: ["Traditional bed", "Garden view", "Attached bathroom", "Cultural artifacts"],
    image: suiteImage
  }, {
    name: "আনন্দ ঘর (Anando Room)",
    description: "Joyful family room with Bengali traditional furniture and cultural experiences",
    price: "₹4,000/night",
    features: ["Family space", "Cultural corner", "Traditional furniture", "Home-cooked meals"],
    image: suiteImage
  }, {
    name: "প্রেম ঘর (Prem Suite)",
    description: "Romantic suite for couples with traditional Bengali hospitality and privacy",
    price: "₹5,500/night",
    features: ["Private space", "Cultural activities", "Traditional meals", "Personal attention"],
    image: suiteImage
  }];
  return <section id="rooms" className="section-padding bg-luxury-cream">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="mb-6">আমাদের ঘর সমূহ (Our Rooms)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience authentic Bengali hospitality in our thoughtfully designed rooms, each reflecting the warmth 
            and cultural richness of traditional Bengali homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => <Card key={index} className="card-hover bg-white border-0 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-luxury group-hover:scale-110" />
                
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">{room.name}</h3>
                <p className="text-luxury-grey mb-4 leading-relaxed">{room.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-luxury-bronze">Features</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-luxury-grey">
                    {room.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </div>
                
                <Button className="w-full btn-luxury">
                  View Details & Book
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline-luxury">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>;
};
export default Rooms;