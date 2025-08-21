import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock, MessageCircle } from "lucide-react";

const WhatsAppBooking = () => {
  const [formData, setFormData] = useState({
    arrivalDate: "",
    guests: "2",
    duration: "2",
    name: "",
    phone: ""
  });

  const handleBooking = () => {
    const message = `নমস্কার! আমি শুভ বেঙ্গলি হোমস্টে-তে বুকিং করতে চাই:

📅 আগমন তারিখ: ${formData.arrivalDate}
👥 অতিথি সংখ্যা: ${formData.guests} জন
⏰ থাকার সময়: ${formData.duration} দিন
👤 নাম: ${formData.name}
📞 ফোন: ${formData.phone}

দয়া করে আমাকে প্রাপ্যতা এবং দাম জানান।`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <h2 className="mb-6">আপনার থাকার ব্যবস্থা করুন</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your authentic Bengali cultural experience directly through WhatsApp
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-elegant border-0">
          <CardHeader className="text-center bg-gradient-saffron text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center gap-2">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Booking
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="arrivalDate" className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    Arrival Date
                  </Label>
                  <Input 
                    id="arrivalDate"
                    type="date"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" />
                    Number of Guests
                  </Label>
                  <Input 
                    id="guests"
                    type="number"
                    min="1"
                    max="8"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="duration" className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  Duration (Days)
                </Label>
                <Input 
                  id="duration"
                  type="number"
                  min="1"
                  max="30"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Your Name</Label>
                  <Input 
                    id="name"
                    placeholder="আপনার নাম"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                  <Input 
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <Button 
                onClick={handleBooking}
                className="w-full btn-indian-luxury text-base py-3 flex items-center justify-center gap-2"
                disabled={!formData.arrivalDate || !formData.name}
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>* You'll be redirected to WhatsApp with your booking details</p>
                <p>* Our family will respond within 2 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatsAppBooking;