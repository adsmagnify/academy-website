import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-adsmagnify-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-adsmagnify-dark-yellow">About Us</h4>
            <p className="text-gray-300 leading-relaxed">
              AI-powered digital marketing courses with live projects and in-house shadow internships in South Bombay, Mumbai. We are a team of 30+ professionals with 10+ years of experience in the digital marketing industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1Cy7Ls1FvJ/" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow hover:scale-110 transform transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/adsmagnify/" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow hover:scale-110 transform transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/adsmagnify/" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow hover:scale-110 transform transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@adsmagnify?si=X1344zszhrJClXxJ" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow hover:scale-110 transform transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-adsmagnify-dark-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/courses" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-adsmagnify-dark-yellow">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-adsmagnify-dark-yellow transition-colors hover:translate-x-1 transform duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-adsmagnify-dark-yellow">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-adsmagnify-dark-yellow" />
                <a 
                  href="tel:+917700090236" 
                  className="text-adsmagnify-blue bg-white px-3 py-1 rounded hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-bounce font-satoshi"
                >
                  +91 7700090236
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-adsmagnify-dark-yellow" />
                <a 
                  href="mailto:info@adsmagnify.com" 
                  className="text-adsmagnify-blue bg-white px-3 py-1 rounded hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-wiggle font-satoshi"
                >
                  info@adsmagnify.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-adsmagnify-dark-yellow mt-1" />
                <address className="text-white not-italic leading-relaxed">
                  PIL Court, G12, near New Central Excise Building,<br />
                  New Marine Lines, Churchgate,<br />
                  Mumbai, Maharashtra 400020
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Adsmagnify Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                href="/privacy-policy" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow text-sm transition-colors hover:translate-x-1 transform duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-and-conditions" 
                className="text-gray-300 hover:text-adsmagnify-dark-yellow text-sm transition-colors hover:translate-x-1 transform duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;