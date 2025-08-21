import { Coffee, Book, Utensils, Wifi, Car, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import spaImage from "@/assets/spa-wellness.jpg";
import restaurantImage from "@/assets/restaurant-dining.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Coffee,
      title: "Traditional Bengali Tea",
      description: "Start your day with authentic Bengali tea and traditional breakfast served with love and warmth.",
      image: spaImage,
    },
    {
      icon: Utensils,
      title: "Home-Cooked Bengali Meals",
      description: "Experience authentic Bengali cuisine prepared with family recipes and fresh local ingredients.",
      image: restaurantImage,
    },
    {
      icon: Book,
      title: "Cultural Experiences",
      description: "Learn Bengali culture through storytelling, traditional music, and cultural activities with local family.",
      image: spaImage,
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "Stay connected with complimentary high-speed internet throughout the homestay.",
      image: null,
    },
    {
      icon: Car,
      title: "Local Guidance",
      description: "Personal assistance with local transportation, sightseeing, and authentic Bengali experiences.",
      image: null,
    },
    {
      icon: TreePine,
      title: "Garden Space",
      description: "Relax in our traditional Bengali garden with local plants and peaceful meditation areas.",
      image: null,
    },
  ];

  return (
    <section id="amenities" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="mb-6">আমাদের সুবিধাসমূহ (Our Facilities)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the warmth of Bengali hospitality with our authentic cultural experiences and home-like facilities.
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
              <h3 className="text-3xl font-light mb-6">Cultural Heritage Experience</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Immerse yourself in authentic Bengali culture through traditional stories, music, and customs. 
                Our family will share the rich heritage of Bengal with you like you're part of our own family.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Traditional Bengali storytelling sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Learn Bengali cooking and traditional recipes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Cultural music and dance performances
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