"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Send
} from "lucide-react";
import { useFormTracking } from "@/hooks/use-tracking";
import { navigateToInternal } from "@/utils/navigation";
import ReCaptcha from "@/components/common/recaptcha";

// Import course data for the form
import coursesData from "@/data/courses.json";

export default function ContactPage() {
  const { trackFormSubmit } = useFormTracking();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  const handleRecaptchaError = () => {
    setRecaptchaError(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    // Validate reCAPTCHA only if it's configured
    if (siteKey && !recaptchaToken) {
      e.preventDefault();
      setRecaptchaError(true);
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    // Track form submission
    trackFormSubmit('demo_booking', 'contact_page');
    
    // FormSubmit.co will handle the submission and redirect
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Contact – Adsmagnify Academy
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
                <form 
                  action="https://formsubmit.co/vinay.h@adsmagnify.in" 
                  method="POST" 
                  target="_blank"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* FormSubmit.co configuration */}
                  <input type="hidden" name="_subject" value="New Enquiry from Contact Page of Website" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://adsmagnifyacademy.com/thank-you" />
                  <input type="hidden" name="g-recaptcha-response" value={recaptchaToken || ""} />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interest</Label>
                      <select name="course" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="not-sure">Not sure yet</option>
                        {coursesData.map((course) => (
                          <option key={course.slug} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                    <select name="preferredTime" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="no-preference">No preference</option>
                      <option value="weekend-morning">Weekend Morning (10 AM - 12 PM)</option>
                      <option value="weekend-afternoon">Weekend Afternoon (2 PM - 4 PM)</option>
                      <option value="weekend-evening">Weekend Evening (4 PM - 6 PM)</option>
                      <option value="weekday-evening">Weekday Evening (6 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals, experience level, or any specific questions..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <ReCaptcha 
                    onChange={handleRecaptchaChange}
                    onError={handleRecaptchaError}
                  />
                  {recaptchaError && (
                    <p className="text-red-500 text-sm text-center">
                      Please complete the reCAPTCHA verification
                    </p>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-adsmagnify-blue hover:bg-adsmagnify-dark-blue text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Book Demo Lecture
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-navy-900">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <a 
                      href="tel:+917700090236" 
                      className="text-adsmagnify-blue hover:text-adsmagnify-dark-blue transition-colors"
                    >
                      +91 7700090236
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a 
                      href="https://wa.me/917700090236" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-adsmagnify-blue hover:text-adsmagnify-dark-blue transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a 
                      href="mailto:info@adsmagnify.com" 
                      className="text-adsmagnify-blue hover:text-adsmagnify-dark-blue transition-colors"
                    >
                      info@adsmagnify.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Timing */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-navy-900">Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-sm text-gray-600">
                      PIL Court, G12, near New Central Excise Building,<br />
                      New Marine Lines, Churchgate, Mumbai 400020
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Demo Timings</p>
                    <p className="text-sm text-gray-600">
                      <strong>Weekends:</strong> 10 AM - 6 PM<br />
                      <strong>Weekdays:</strong> 6 PM - 8 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-navy-900">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Only 6 students per batch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Live client projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>10-hour shadow internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Job placement support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Weekend classes available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}