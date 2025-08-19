import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-luxury-cream">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="mb-6">Contact & Reservations</h2>
          <p className="text-xl text-luxury-grey max-w-3xl mx-auto leading-relaxed">
            Ready to experience paradise? Contact our luxury concierge team to plan your perfect getaway.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reservations</h3>
                    <p className="text-luxury-grey">Call us anytime</p>
                  </div>
                </div>
                <p className="text-xl font-light text-luxury-gold">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-luxury-grey">Get in touch</p>
                  </div>
                </div>
                <p className="text-luxury-gold">reservations@sereneshores.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-luxury-grey">Paradise Bay</p>
                  </div>
                </div>
                <p className="text-luxury-grey">123 Oceanfront Drive<br />Paradise Bay, Tropical Island 12345</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-luxury-grey">Concierge available</p>
                  </div>
                </div>
                <p className="text-luxury-grey">24/7 Luxury Service</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                        Check-in Date
                      </label>
                      <Input id="checkIn" type="date" />
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-medium mb-2">
                        Check-out Date
                      </label>
                      <Input id="checkOut" type="date" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Tell us about your perfect stay..."
                    />
                  </div>

                  <Button className="btn-luxury w-full md:w-auto px-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-luxury rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-light mb-4">Ready to Experience Paradise?</h3>
          <p className="text-xl mb-8 text-white/90">
            Book your luxury escape today and discover why Serene Shores is the ultimate tropical retreat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-foreground hover:bg-white/90 text-lg px-10 py-6">
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-10 py-6"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;