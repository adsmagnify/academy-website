"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Send
} from "lucide-react";

// Import course data for the form
import coursesData from "@/data/courses.json";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    preferredTime: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Track form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your demo lecture request has been submitted. We'll contact you within 2 hours to schedule your session.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="tel:+917700090236">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 7700090236
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Book Your Demo Lecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our unique teaching methodology before you commit. 
            Free demo lectures available for all courses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Schedule Your Demo</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you within 2 hours to schedule your demo lecture.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interest *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {coursesData.map((course) => (
                            <SelectItem key={course.slug} value={course.slug}>
                              {course.shortName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Saturday (1 PM - 4 PM)</SelectItem>
                          <SelectItem value="weekday-afternoon">Saturday (5 PM - 7 PM)</SelectItem>
                          <SelectItem value="weekday-evening">Sunday (1 PM - 4 PM)</SelectItem>
                          <SelectItem value="weekend-morning">Sunday (5 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your background, goals, or any specific questions you have..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Book Demo Lecture
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-navy-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+917700090236" 
                      className="text-navy-900 hover:text-amber-600 transition-colors"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'click_to_call', {
                            event_category: 'engagement',
                            phone_number: '+917700090236'
                          });
                        }
                      }}
                    >
                      +91 7700090236
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@adsmagnify.com" className="text-navy-900 hover:text-amber-600 transition-colors">
                      info@adsmagnify.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <address className="text-gray-600 text-sm not-italic leading-relaxed">
                      PIL Court, G12, near New Central Excise Building,<br />
                      New Marine Lines, Churchgate,<br />
                      Mumbai, Maharashtra 400020
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600 text-sm">
                      Mon - Sun: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 mb-2">Prefer WhatsApp?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Get instant responses to your questions
                </p>
                <Button 
                  asChild 
                  className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 hover:text-white hover:hover-wiggle font-satoshi"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'whatsapp_click', {
                        event_category: 'engagement',
                        event_label: 'contact_page'
                      });
                    }
                  }}
                >
                  <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-navy-900">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0635219736567!2d72.82639631744385!3d18.932200387161254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0x2223554f8885bde8!2sChurchgate%20Station!5e0!3m2!1sen!2sin!4v1703670123456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              What to Expect from Your Demo Lecture
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Live Campaign Walkthrough</h3>
                <p className="text-gray-600 text-sm">
                  See actual campaigns we've run with real results and ROI data
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">AI Tools Demo</h3>
                <p className="text-gray-600 text-sm">
                  Experience how AI tools can 10x your marketing productivity
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Career Roadmap</h3>
                <p className="text-gray-600 text-sm">
                  Personalized career advice and learning path for your goals
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Adsmagnify Academy",
              "telephone": "+91 7700090236",
              "email": "info@adsmagnify.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "PIL Court, G12, near New Central Excise Building, New Marine Lines",
                "addressLocality": "Churchgate",
                "addressRegion": "Mumbai",
                "postalCode": "400020",
                "addressCountry": "IN"
              },
              "openingHours": ["Mo-Su 09:00-18:00"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7700090236",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "Mumbai"
              }
            }
          })
        }}
      />
    </div>
  );
}