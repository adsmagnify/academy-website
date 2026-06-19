// @ts-nocheck
"use client";

import HeroSection from "@/components/common/hero-section";
import CourseCard from "@/components/common/course-card";
import SpecialCourseBanner from "@/components/common/special-course-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, 
  Star, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle
} from "lucide-react";
import CountUp from "@/components/common/count-up";
import { useCTATracking } from "@/hooks/use-tracking";

// Import course data
import coursesData from "@/data/courses.json";
import testimonialsData from "@/data/testimonials.json";

export default function Home() {
  const { trackCTAClick } = useCTATracking();
  const featuredTestimonials = testimonialsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Best AI Digital Marketing Academy – Adsmagnify"
        subtitle="Live Projects + Shadow Internships"
        description="Learn from industry experts with hands-on experience. Only 6 students per batch. Batch 12 starts 20th July | Mon-Wed-Fri 7 PM to 9 PM in Churchgate, Mumbai."
        ctaText="Book Your Demo Lecture"
        ctaLink="/contact"
      />

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4 font-unbounded">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-satoshi">
              Choose from our comprehensive AI-powered digital marketing courses designed for real-world success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coursesData.map((course, index) => (
              <CourseCard {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-adsmagnify-blue hover:bg-adsmagnify-dark-blue text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 font-satoshi"
              onClick={() => trackCTAClick('view_all_courses', 'home_page')}
            >
              <Link href="/courses" className="flex items-center gap-2">
                View All Courses
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-adsmagnify-dark-yellow font-unbounded">
              Why Choose Adsmagnify Academy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-satoshi">
              We're not just another training institute. We're your career transformation partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-adsmagnify-dark-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-adsmagnify-blue" />
              </div>
              <h3 className="text-xl text-adsmagnify-dark-yellow font-bold mb-2 font-unbounded">Small Batch Size</h3>
              <p className="text-gray-300 font-satoshi">Only 4 students per batch for personalized attention</p>
            </div>
            
            <div className="text-center">
              <div className="bg-adsmagnify-dark-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-adsmagnify-blue" />
              </div>
              <h3 className="text-xl text-adsmagnify-dark-yellow font-bold mb-2 font-unbounded">Live Projects</h3>
              <p className="text-gray-300 font-satoshi">Work on real client campaigns with actual budgets</p>
            </div>
            
            <div className="text-center">
              <div className="bg-adsmagnify-dark-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-adsmagnify-blue" />
              </div>
              <h3 className="text-xl text-adsmagnify-dark-yellow font-bold mb-2 font-unbounded">Sunday Classes</h3>
              <p className="text-gray-300 font-satoshi">Every Sunday, 12 PM to 3 PM for working professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-adsmagnify-dark-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-adsmagnify-blue" />
              </div>
              <h3 className="text-xl text-adsmagnify-dark-yellow font-bold mb-2 font-unbounded">Prime Location</h3>
              <p className="text-gray-300 font-satoshi">Churchgate, Mumbai - easily accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Course Banner */}
      <SpecialCourseBanner />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4 font-unbounded">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-satoshi">
              Don't just take our word for it. Hear from our successful graduates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id as any} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed font-satoshi">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-800 font-satoshi">{testimonial.name}</div>
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                          {testimonial.course}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-adsmagnify-blue text-adsmagnify-blue hover:bg-adsmagnify-blue hover:text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 font-satoshi"
              onClick={() => trackCTAClick('view_all_testimonials', 'home_page')}
            >
              <Link href="/testimonials" className="flex items-center gap-2">
                View All Testimonials
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-unbounded">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto font-satoshi">
            Book your demo lecture today and experience our unique teaching methodology. 
            Limited seats available - only 4 students per batch!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:bg-white hover:text-adsmagnify-blue hover:scale-105 transform transition-all duration-300 font-satoshi"
              onClick={() => trackCTAClick('book_demo', 'home_page_cta')}
            >
              <Link href="/contact">Book Your Demo Lecture Today</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:scale-105 transform transition-all duration-300 font-satoshi"
              onClick={() => trackCTAClick('whatsapp', 'home_page_cta')}
            >
              <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer" className="font-satoshi">
                WhatsApp: +91 7700090236
              </a>
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-800">Free Demo Lecture</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium text-gray-800">4 Students Per Batch</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-800">24-Hour Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Adsmagnify Academy",
            "description": "AI-powered digital marketing courses in Mumbai with live projects and shadow internships",
            "url": "https://adsmagnify.vercel.app",
            "logo": "https://adsmagnify.vercel.app/images/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "PIL Court, G12, near New Central Excise Building, New Marine Lines",
              "addressLocality": "Churchgate",
              "addressRegion": "Mumbai",
              "postalCode": "400020",
              "addressCountry": "IN"
            },
            "telephone": "+91 7700090236",
            "email": "info@adsmagnify.com",
            "sameAs": [
              "https://facebook.com/adsmagnifyacademy",
              "https://instagram.com/adsmagnifyacademy",
              "https://linkedin.com/company/adsmagnifyacademy"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Courses",
              "itemListElement": coursesData.map(course => ({
                "@type": "Course",
                "name": course.name,
                "description": course.overview,
                "provider": {
                  "@type": "Organization",
                  "name": "Adsmagnify Academy"
                },
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "offline",
                  "duration": course.duration,
                  "price": course.priceINR,
                  "priceCurrency": "INR"
                }
              }))
            }
          })
        }}
      />
    </div>
  );
}
