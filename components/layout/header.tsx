"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-adsmagnify-dark-blue shadow-xl sticky top-0 z-50 animate-slide-in-right h-20">
        <div className="w-full px-0 h-full">
          <div className="flex items-center h-full pl-4 pr-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center h-full overflow-hidden hover:scale-105 transform transition-all duration-300 animate-fade-in-scale"
              aria-label="Adsmagnify Academy Home"
            >
              <Image
                src="/logo.png"
                alt="Adsmagnify Academy"
                width={1000}
                height={1000}
                priority
                className="h-[180%] w-auto object-contain object-center -mt-9"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white hover:text-adsmagnify-dark-yellow hover:scale-105 transform transition-all duration-300 font-medium relative group animate-fade-in-up stagger-${index + 1} font-satoshi`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-adsmagnify-dark-yellow group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Fixed spacing */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <Button 
                asChild
                className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-pulse-ring font-satoshi"
              >
                <Link href="/contact">Book Demo</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-adsmagnify-dark-blue/70 ml-auto">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-adsmagnify-blue">Menu</h2>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-adsmagnify-light-blue"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium text-visible-dark hover:text-visible-blue transition-colors hover:translate-x-2 transform duration-300 py-3 border-b border-gray-100 animate-fade-in-up stagger-${index + 1} font-satoshi`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <Button 
                    asChild 
                    className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-elastic font-satoshi mt-6"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Book Demo Lecture
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;