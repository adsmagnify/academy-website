import { Metadata } from "next";
import HeroSection from "@/components/common/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import CountUp from "@/components/common/count-up";

// Import testimonials data
import testimonialsData from "@/data/testimonials.json";

export const metadata: Metadata = {
  title: "Student Success Stories & Testimonials | Adsmagnify Academy",
  description: "Read success stories from our AI digital marketing course graduates now working at top companies like Reliance, Nykaa, Swiggy, and Paytm in Mumbai.",
  keywords: "digital marketing course testimonials Mumbai, student success stories, AI marketing training reviews, performance marketing course feedback",
  openGraph: {
    title: "Student Success Stories & Testimonials | Adsmagnify Academy",
    description: "Read success stories from our AI digital marketing course graduates now working at top companies like Reliance, Nykaa, Swiggy, and Paytm in Mumbai.",
    url: "https://adsmagnify.vercel.app/testimonials"
  }
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Success Stories from Our Alumni"
        subtitle="Real Results from Real Students"
        description="Our graduates are now leading digital marketing teams at top companies across Mumbai and India. Read their journey from beginner to expert."
        ctaText="Join Our Next Batch"
        ctaLink="/contact"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <CountUp value={15} suffix="+" className="text-4xl font-bold text-primary mb-2" />
              <div className="text-gray-600 font-medium">Students Trained</div>
            </div>
            <div>
              <CountUp value={85} suffix="%" className="text-4xl font-bold text-primary mb-2" />
              <div className="text-gray-600 font-medium">Placement Rate</div>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary mb-2">₹<CountUp value={50} suffix="cr+" /></span>
              <div className="text-gray-600 font-medium">Avg. Ad Spend Managed</div>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary mb-2"><CountUp value={4} />★</span>
              <div className="text-gray-600 font-medium">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From career changes to promotions, see how our AI-powered digital marketing courses transformed their professional lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 relative">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-secondary opacity-50" />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.course}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs border-primary text-primary">
                      {testimonial.course}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course-wise Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Success by Course
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* AI Performance Marketing Testimonials */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                AI Performance Marketing Course
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonialsData
                  .filter(t => t.course === "AI Performance Marketing")
                  .slice(0, 6)
                  .map((testimonial) => (
                    <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-primary text-sm">{testimonial.name}</div>
                            <div className="text-xs text-gray-500">{testimonial.course}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* AI SEO Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                AI SEO Course
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonialsData
                  .filter(t => t.course === "AI SEO")
                  .slice(0, 6)
                  .map((testimonial) => (
                    <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-primary text-sm">{testimonial.name}</div>
                            <div className="text-xs text-gray-500">{testimonial.course}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-adsmagnify-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next batch and become the next success story. Book your demo lecture today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-black font-semibold hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Demo Lecture</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-adsmagnify-blue border-white hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:scale-105 transform transition-all duration-200">
              <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
                WhatsApp +91 7700090236
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": testimonialsData.map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "reviewBody": testimonial.text,
              "itemReviewed": {
                "@type": "Course",
                "name": testimonial.course,
                "provider": {
                  "@type": "Organization",
                  "name": "Adsmagnify Academy"
                }
              },
              "datePublished": testimonial.date
            }))
          })
        }}
      />
    </div>
  );
}
