import { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "@/components/common/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { 
  IndianRupee, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  Brain,
  Target,
  Award,
  Briefcase
} from "lucide-react";

// Import data
import coursesData from "@/data/courses.json";
import instructorsData from "@/data/instructors.json";

interface CoursePageProps {
  params?: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  if (!params) {
    return {
      title: "Course Not Found",
    };
  }
  const { slug } = await params;
  const course = coursesData.find(c => c.slug === slug);
  
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.name} in Mumbai | AI-Powered Digital Marketing Training`,
    description: `${course.overview} Weekend batches in Churchgate, Mumbai. Only 4 students per batch with live projects and shadow internship included.`,
    keywords: `${course.name.toLowerCase()}, digital marketing course Mumbai, AI marketing training, ${course.slug.replace('-', ' ')}, Churchgate courses`,
    openGraph: {
      title: `${course.name} | Adsmagnify Academy`,
      description: course.overview,
      url: `https://adsmagnify.vercel.app/courses/${slug}`
    }
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  if (!params) {
    notFound();
  }
  const { slug } = await params;
  const course = coursesData.find(c => c.slug === slug);
  
  if (!course) {
    notFound();
  }

  const mainInstructor = instructorsData[0]; // Vinay Hankare

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:w-2/3">
                <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue mb-4">{course.mode}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-adsmagnify-yellow">{course.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.overview}</p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-adsmagnify-yellow" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-adsmagnify-yellow" />
                    <span>4 Students Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-adsmagnify-yellow" />
                    <span>Churchgate, Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-adsmagnify-yellow" />
                    <span>Certificate Included</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <Card className="bg-white text-navy-900">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center text-3xl font-bold mb-2">
                        <IndianRupee className="h-6 w-6" />
                        {course.priceINR.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600">₹2000 registration + flexible EMI</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Live Client Projects</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>10-Hour Shadow Internship</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>AI Tools Training</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Job Placement Support</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                        <Link href="/contact">Book Demo Lecture</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-white text-adsmagnify-blue hover:bg-adsmagnify-yellow hover:text-adsmagnify-blue hover:border-adsmagnify-yellow hover:scale-105 transform transition-all duration-200">
                        <a href="tel:+917700090236">Call +91 7700090236</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8">
              Who Is This Course For?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {course.whoItsFor.map((item, index) => (
                <Card key={index} className="text-left hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-adsmagnify-light-yellow p-2 rounded-full">
                        <Target className="h-5 w-5 text-adsmagnify-yellow" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Course Curriculum
            </h2>
            
            <Accordion type="multiple" className="space-y-4">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-navy-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-left">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="ml-12">
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-adsmagnify-yellow" />
              <h2 className="text-3xl lg:text-4xl font-bold text-adsmagnify-yellow">
                AI Tools You'll Master
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Learn industry-leading AI tools that give you a competitive advantage
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {(() => {
                const logoSrcByTool: Record<string, string> = {
                  "chatgpt": "/chatgpt5.png",
                  "chatgpt-5": "/chatgpt5.png",
                  "gemini": "/gemini.jpeg",
                  "bolt.ai": "/bolt.jpg",
                  "boltai": "/bolt.jpg",
                  "heygen": "/heygen.webp",
                  "elevenlabs": "/elevenlabs.png",
                };
                return course.aiTools.map((tool) => {
                  const key = tool.toLowerCase().replace(/\s+/g, "");
                  const src = logoSrcByTool[key] || "/logo.png";
                  return (
                    <div key={tool} className="bg-navy-800 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 bg-white shadow-sm overflow-hidden">
                        <img src={src} alt={`${tool} logo`} className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className="font-bold text-adsmagnify-yellow">{tool}</h3>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8">
              What You'll Achieve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {course.outcomes.map((outcome, index) => (
                <Card key={index} className="text-left hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-gray-700">{outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Meet Your Instructors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <img
                    src={mainInstructor.image}
                    alt={mainInstructor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{mainInstructor.name}</h3>
                  <p className="text-adsmagnify-yellow font-medium mb-3">{mainInstructor.title}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{mainInstructor.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {mainInstructor.expertise.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Brands Worked With:</h4>
                    <p className="text-gray-600 text-sm">{mainInstructor.brandsWorkedWith.slice(0, 3).join(', ')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <img
                    src="/aloke.JPG"
                    alt="Industry Expert Partner"
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Industry Expert Partner</h3>
                  <p className="text-adsmagnify-yellow font-medium mb-3">Guest Instructor & Mentor</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Senior marketing professional from top agencies with 10+ years in performance marketing and SEO. 
                    Brings real-world case studies and industry insights.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {["SEO Strategy", "Content Marketing", "Agency Operations", "Client Management"].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Brands Worked With:</h4>
                    <p className="text-gray-600 text-sm">Ogilvy, Publicis, Dentsu</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Upcoming Batches
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {course.upcomingBatches.map((batch, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-5 w-5 text-adsmagnify-yellow" />
                      <span className="font-bold text-lg">
                        {new Date(batch.startDate).toLocaleDateString('en-IN', { 
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{batch.schedule}</p>
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      {batch.seats}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                <Link href="/contact">Secure Your Seat</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What makes this course different from online courses?",
                  answer: "Our course offers in-person instruction with only 4 students per batch, live client projects with real budgets, and a 10-hour shadow internship where you work alongside our team on actual client campaigns."
                },
                {
                  question: "Do I need prior experience in marketing?",
                  answer: "No prior experience required. Our course is designed for beginners, but we also accommodate students with some marketing background by customizing the pace and depth of content."
                },
                {
                  question: "What AI tools will I learn?",
                  answer: `You'll master ${course.aiTools.join(', ')} and learn how to integrate them into your marketing workflows for maximum efficiency and results.`
                },
                {
                  question: "Is job placement guaranteed?",
                  answer: "While we can't guarantee placement, 95% of our graduates secure marketing roles within 3 months. We provide resume building, interview preparation, and direct connections to hiring companies."
                },
                {
                  question: "Can I pay in installments?",
                  answer: "Yes! Pay ₹2,000 as registration fee and the remaining amount in flexible monthly installments. We work with you to create a payment plan that fits your budget."
                },
                {
                  question: "What if I miss a class?",
                  answer: "With our small batch size, we can accommodate make-up sessions. We also provide recordings of key sessions and one-on-one catch-up time with the instructor."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-adsmagnify-yellow text-adsmagnify-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Career with AI Marketing?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Book your demo lecture today. Experience our teaching methodology and see real campaign results before you commit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-blue hover:bg-navy-800 text-white hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Demo Lecture Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-adsmagnify-blue hover:bg-white hover:bg-adsmagnify-blue hover:text-adsmagnify-yellow hover:scale-105 transform transition-all duration-200">
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": course.name,
              "description": course.overview,
              "provider": {
                "@type": "Organization",
                "name": "Adsmagnify Academy",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "PIL Court, G12, near New Central Excise Building, New Marine Lines",
                  "addressLocality": "Churchgate",
                  "addressRegion": "Mumbai",
                  "postalCode": "400020",
                  "addressCountry": "IN"
                },
                "telephone": "+91 7700090236"
              },
              "hasCourseInstance": course.upcomingBatches.map(batch => ({
                "@type": "CourseInstance",
                "courseMode": "offline",
                "startDate": batch.startDate,
                "duration": course.duration,
                "price": course.priceINR,
                "priceCurrency": "INR",
                "location": {
                  "@type": "Place",
                  "name": "Adsmagnify Academy",
                  "address": "Churchgate, Mumbai"
                },
                "maximumAttendeeCapacity": 4
              })),
              "courseCode": course.slug.toUpperCase(),
              "educationalLevel": "Beginner to Intermediate",
              "teaches": course.outcomes,
              "audience": {
                "@type": "Audience",
                "audienceType": course.whoItsFor
              }
            },
            {
              "@context": "https://schema.org", 
              "@type": "FAQPage",
              "mainEntity": [
                {
                  question: "What makes this course different from online courses?",
                  answer: "Our course offers in-person instruction with only 4 students per batch, live client projects with real budgets, and a 10-hour shadow internship where you work alongside our team on actual client campaigns."
                },
                {
                  question: "Do I need prior experience in marketing?",
                  answer: "No prior experience required. Our course is designed for beginners, but we also accommodate students with some marketing background by customizing the pace and depth of content."
                },
                {
                  question: "What AI tools will I learn?",
                  answer: `You'll master ${course.aiTools.join(', ')} and learn how to integrate them into your marketing workflows for maximum efficiency and results.`
                }
              ].map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": mainInstructor.name,
              "jobTitle": mainInstructor.title,
              "worksFor": {
                "@type": "Organization",
                "name": "Adsmagnify Academy"
              },
              "description": mainInstructor.bio,
              "knowsAbout": mainInstructor.expertise,
              "image": mainInstructor.image
            }
          ])
        }}
      />
    </div>
  );
}