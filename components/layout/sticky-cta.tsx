"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Phone, MessageCircle } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-adsmagnify-dark-yellow text-adsmagnify-blue p-4 shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="font-semibold text-sm md:text-base">
            🎯 Book Your Demo Lecture Today - Only 4 Seats Per Batch!
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Next batch starts Sept 20th. Limited seats available.
          </p>
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          <Button 
            asChild
            size="sm"
            className="bg-white text-adsmagnify-blue hover:bg-adsmagnify-blue hover:text-white hidden sm:inline-flex hover:hover-slide-up shadow-md font-satoshi"
          >
            <a href="tel:+917700090236">
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </a>
          </Button>
          
          <Button 
            asChild
            size="sm"
            className="bg-white text-adsmagnify-blue hover:bg-adsmagnify-blue hover:text-white hidden sm:inline-flex hover:hover-wiggle shadow-md font-satoshi"
          >
            <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp
            </a>
          </Button>

          <Button 
            asChild 
            size="sm" 
            className="bg-white text-adsmagnify-blue hover:bg-adsmagnify-blue hover:text-white hover:hover-neon shadow-md font-satoshi"
          >
            <Link href="/contact">Book Demo</Link>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow p-1 hover:scale-110 transform transition-all duration-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;