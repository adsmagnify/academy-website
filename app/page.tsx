import HeroSection from "@/components/common/hero-section";
import Image from "next/image";
import CourseCard from "@/components/common/course-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Star, 
  Clock, 
  Award,
  CheckCircle,
  Brain,
  Zap,
  Target,
  Rocket,
  Shield
} from "lucide-react";

// Import course data
import coursesData from "@/data/courses.json";
import testimonialsData from "@/data/testimonials.json";

export default function Home() {
  const featuredTestimonials = testimonialsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="AI-Powered Digital Marketing Courses in Mumbai"
        subtitle="Master Performance Marketing & SEO with Live Projects + Shadow Internships"
        description="Join Mumbai's most exclusive digital marketing academy with only 4 students per batch. Learn from industry experts, work on real client projects, and get job-ready in 4-6 weeks."
        badge="🎯 New Batch Starting Feb 15th - Limited Seats!"
      />

      {/* USP Section */}
      <section className="py-20 bg-white-contrast relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-visible-dark mb-6 animate-fade-in-up font-unbounded">
              Why Choose Adsmagnify Academy?
            </h2>
            <p className="text-xl text-visible-dark max-w-3xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
              Mumbai's first AI-powered digital marketing academy with personalized attention and guaranteed practical experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="text-center group animate-fade-in-up stagger-3">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift group-hover:animate-pulse-glow">
                <Users className="h-10 w-10 text-visible-blue" />
              </div>
              <h3 className="font-bold text-visible-dark mb-3 text-lg font-unbounded">Only 4 Students Per Batch</h3>
              <p className="text-visible-dark text-sm leading-relaxed font-satoshi">Personalized attention and mentorship for every student</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-4">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift group-hover:animate-pulse-glow">
                <Briefcase className="h-10 w-10 text-visible-blue" />
              </div>
              <h3 className="font-bold text-visible-dark mb-3 text-lg font-unbounded">Live Client Projects</h3>
              <p className="text-visible-dark text-sm leading-relaxed font-satoshi">Work on real campaigns with actual client budgets</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-5">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift group-hover:animate-pulse-glow">
                <GraduationCap className="h-10 w-10 text-visible-blue" />
              </div>
              <h3 className="font-bold text-visible-dark mb-3 text-lg font-unbounded">10-Hour Shadow Internship</h3>
              <p className="text-visible-dark text-sm leading-relaxed font-satoshi">In-house agency experience with real client calls</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-6">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift group-hover:animate-pulse-glow">
                <TrendingUp className="h-10 w-10 text-visible-blue" />
              </div>
              <h3 className="font-bold text-visible-dark mb-3 text-lg font-unbounded">EMI Payment Options</h3>
              <p className="text-visible-dark text-sm leading-relaxed font-satoshi">₹2000 registration + flexible monthly payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-visible-dark mb-6 animate-fade-in-up font-unbounded">
              Our Featured Courses
            </h2>
            <p className="text-xl text-visible-dark max-w-3xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
              Master AI-powered digital marketing with hands-on training and industry-recognized certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {coursesData.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-adsmagnify-blue text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-adsmagnify-yellow hover:text-adsmagnify-blue hover:scale-105 transform transition-all duration-300 font-satoshi">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-visible-yellow" />
              <h2 className="text-3xl lg:text-4xl font-bold text-visible-white-on-dark animate-fade-in-up font-unbounded">
                Master Cutting-Edge AI Tools
              </h2>
            </div>
            <p className="text-xl text-visible-white-on-dark max-w-3xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
              Learn the latest AI tools that are transforming digital marketing and give you a competitive edge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center object-contain">
            {[
              { name: "ChatGPT", purpose: "Ad Copy & Strategy", logo: "/chatgpt5.png" },
              { name: "Gemini", purpose: "Content Creation", logo: "/gemini.jpeg" },
              { name: "Bolt.AI", purpose: "Automation", logo: "/bolt.jpg" },
              { name: "Heygen", purpose: "AI Video Creation", logo: "/heygen.webp" },
              { name: "ElevenLabs", purpose: "AI Voiceovers", logo: "/elevenlabs.png" }
            ].map((tool, index) => (
              <div key={tool.name} className={`bg-white-contrast p-8 rounded-2xl hover-lift animate-fade-in-up stagger-${index + 3}`}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white shadow-sm animate-float">
                  <Image src={tool.logo} alt={`${tool.name} logo`} width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-visible-dark font-unbounded">{tool.name}</h3>
                <p className="text-visible-dark text-sm font-satoshi">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Instructors */}
      <section className="py-20 bg-white-contrast">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-visible-dark mb-6 animate-fade-in-up font-unbounded">
              Meet Your Instructors
            </h2>
            <p className="text-xl text-visible-dark max-w-3xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
              Learn from industry experts with real-world experience and proven track records
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift bg-white shadow-lg animate-fade-in-up stagger-3">
              <CardContent className="p-10 text-center">
                <img
                  src="/vinay.jpg"
                  alt="Vinay Hankare"
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-adsmagnify-dark-yellow shadow-lg"
                />
                <h3 className="text-2xl font-bold text-visible-dark mb-3 font-unbounded">Vinay Hankare</h3>
                <p className="text-visible-yellow font-bold mb-4 text-lg font-satoshi">Managing Director & Lead Instructor</p>
                <p className="text-visible-dark text-sm mb-6 leading-relaxed font-satoshi">
                  8+ years in digital marketing with expertise in AI-powered campaigns. 
                  Trained 200+ successful marketers.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Performance Marketing", "AI Tools", "Google Ads", "Meta Ads"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-adsmagnify-blue text-visible-blue hover:bg-adsmagnify-dark-yellow hover:text-white transition-colors font-satoshi">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white shadow-lg animate-fade-in-up stagger-4">
              <CardContent className="p-10 text-center">
                <img
                  src="/aloke.JPG"
                  alt="Industry Expert"
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-adsmagnify-dark-yellow shadow-lg"
                />
                <h3 className="text-2xl font-bold text-visible-dark mb-3 font-unbounded">Aloke Bajpai</h3>
                <p className="text-visible-yellow font-bold mb-4 text-lg font-satoshi">Partner & Instructor</p>
                <p className="text-visible-dark text-sm mb-6 leading-relaxed font-satoshi">
                30+ years in Business & Travel with expertise in global operations. Worked across diverse markets and built innovative strategies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Business Strategy", "Consumer Psychology", "Life Skills"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-adsmagnify-blue text-visible-blue hover:bg-adsmagnify-dark-yellow hover:text-white transition-colors font-satoshi">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-gradient-to-br from-adsmagnify-dark-yellow to-adsmagnify-dark-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="animate-fade-in-up stagger-3">
              <div className="text-5xl font-bold text-visible-blue mb-3 font-unbounded">200+</div>
              <div className="text-visible-blue font-bold text-lg font-satoshi">Students Trained</div>
            </div>
            <div className="animate-fade-in-up stagger-4">
              <div className="text-5xl font-bold text-visible-blue mb-3 font-unbounded">85%</div>
              <div className="text-visible-blue font-bold text-lg font-satoshi">Placement Rate</div>
            </div>
            <div className="animate-fade-in-up stagger-5">
              <div className="text-5xl font-bold text-visible-blue mb-3 font-unbounded">₹50L+</div>
              <div className="text-visible-blue font-bold text-lg font-satoshi">Avg. Ad Spend Managed</div>
            </div>
            <div className="animate-fade-in-up stagger-6">
              <div className="text-5xl font-bold text-visible-blue mb-3 font-unbounded">4.9★</div>
              <div className="text-visible-blue font-bold text-lg font-satoshi">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-visible-dark mb-6 animate-fade-in-up font-unbounded">
              Success Stories from Our Alumni
            </h2>
            <p className="text-xl text-visible-dark max-w-3xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
              Hear from our graduates who are now leading digital marketing teams at top companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className={`hover-lift bg-white shadow-lg animate-fade-in-up stagger-${index + 3}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-adsmagnify-dark-yellow text-visible-yellow" />
                    ))}
                  </div>
                  <p className="text-visible-dark mb-6 text-sm leading-relaxed font-satoshi">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-adsmagnify-dark-yellow"
                    />
                    <div>
                      <div className="font-bold text-visible-dark font-satoshi">{testimonial.name}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs border-adsmagnify-blue text-visible-blue hover:bg-adsmagnify-blue hover:text-white transition-colors font-satoshi">
                    {testimonial.course}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-adsmagnify-blue hover:text-white hover:scale-105 transform transition-all duration-300 font-satoshi">
              <Link href="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-adsmagnify-blue to-adsmagnify-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-visible-white-on-dark animate-fade-in-up font-unbounded">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-visible-white-on-dark mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2 font-satoshi">
            Book your demo lecture today and experience our unique teaching methodology. 
            Limited seats available - only 4 students per batch!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-3">
            <Button asChild size="lg" className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:bg-white hover:text-adsmagnify-blue hover:hover-glow-intense font-satoshi">
              <Link href="/contact">Book Your Demo Lecture Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-adsmagnify-blue border-2 border-adsmagnify-blue font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-wiggle font-satoshi">
              <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer" className="font-satoshi">
                WhatsApp: +91 7700090236
              </a>
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm animate-fade-in-up stagger-4">
            <div className="flex items-center justify-center gap-3 bg-white-contrast p-4 rounded-xl">
              <CheckCircle className="h-4 w-4 text-visible-yellow" />
              <span className="text-visible-dark font-satoshi">Free Demo Lecture</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white-contrast p-4 rounded-xl">
              <CheckCircle className="h-4 w-4 text-visible-yellow" />
              <span className="text-visible-dark font-satoshi">EMI Options Available</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white-contrast p-4 rounded-xl">
              <CheckCircle className="h-4 w-4 text-visible-yellow" />
              <span className="text-visible-dark font-satoshi">Job Placement Support</span>
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
