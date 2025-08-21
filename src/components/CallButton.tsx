import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="btn-call group text-sm px-4 py-2">
          <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          Call Now
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-light text-foreground">
            Contact Serene Shores Resort
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6 p-6">
          <div className="bg-luxury-cream rounded-lg p-6">
            <Phone className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Reservations & Concierge</h3>
            <p className="text-2xl font-light text-luxury-gold mb-4">+1 (555) 123-4567</p>
            <p className="text-luxury-grey text-sm">Available 24/7 for your convenience</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="btn-luxury flex-1">
              <a href="tel:+15551234567">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-luxury flex-1"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
          
          <div className="text-sm text-luxury-grey">
            <p>Best rate guarantee • Instant confirmation</p>
            <p>Speak directly with our luxury concierge team</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallButton;