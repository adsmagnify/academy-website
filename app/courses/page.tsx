import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ArrowRight,
  Star
} from "lucide-react";

// Import data
import coursesData from "@/data/courses.json";

export const metadata: Metadata = {
  title: "Digital Marketing Courses in Mumbai | AI-Powered Training | Adsmagnify Academy",
  description: "Join Mumbai's premier AI-powered digital marketing courses. Weekend batches in Churchgate with only 4 students per batch. Live projects, shadow internship, and job placement support included.",
  keywords: "digital marketing course Mumbai, AI marketing training, performance marketing course, SEO course, Churchgate courses, weekend batches",
  openGraph: {
    title: "Digital Marketing Courses in Mumbai | Adsmagnify Academy",
    description: "Master AI-powered digital marketing with live projects and guaranteed job placement support. Only 4 students per batch.",
    url: "https://adsmagnify.vercel.app/courses",
    type: 'website',
  }
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-adsmagnify-yellow">
              Digital Marketing Courses
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI-driven marketing with live client projects, shadow internships, and guaranteed job placement support in Mumbai's premier training academy.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <Users className="h-8 w-8 text-adsmagnify-yellow" />
                <span className="text-sm font-medium">Only 4 Students</span>
                <span className="text-xs text-gray-400">Per Batch</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-8 w-8 text-adsmagnify-yellow" />
                <span className="text-sm font-medium">Churchgate</span>
                <span className="text-xs text-gray-400">Mumbai</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-8 w-8 text-adsmagnify-yellow" />
                <span className="text-sm font-medium">Weekend Batches</span>
                <span className="text-xs text-gray-400">Flexible Schedule</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-adsmagnify-yellow" />
                <span className="text-sm font-medium">85% Placement</span>
                <span className="text-xs text-gray-400">Rate</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Free Demo Lecture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                Choose Your Learning Path
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each course includes live client projects, AI tools training, and a 10-hour shadow internship for real-world experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {coursesData.map((course, index) => (
                <Card key={course.slug} className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${index === 1 ? 'lg:scale-105 border-2 border-adsmagnify-yellow' : ''}`}>
                  {index === 1 && (
                    <div className="bg-adsmagnify-yellow text-adsmagnify-blue text-center py-2 text-sm font-bold">
                      🔥 MOST POPULAR
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-navy-900 text-white">{course.mode}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-adsmagnify-yellow fill-current" />
                        <span className="text-sm font-medium">4.9/5</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-navy-900 mb-2">
                      {course.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {course.overview}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Price */}
                    <div className="text-center py-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center text-3xl font-bold text-navy-900 mb-1">
                        <IndianRupee className="h-6 w-6" />
                        {course.priceINR.toLocaleString('en-IN')}
                      </div>
                      <p className="text-sm text-gray-600">₹2000 registration + EMI available</p>
                    </div>

                    {/* Key Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="h-4 w-4 text-adsmagnify-yellow flex-shrink-0" />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="h-4 w-4 text-adsmagnify-yellow flex-shrink-0" />
                        <span className="text-gray-700">Only 4 Students Per Batch</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-adsmagnify-yellow flex-shrink-0" />
                        <span className="text-gray-700">Churchgate, Mumbai</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Award className="h-4 w-4 text-adsmagnify-yellow flex-shrink-0" />
                        <span className="text-gray-700">Certificate + Shadow Internship</span>
                      </div>
                    </div>

                    {/* AI Tools */}
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2 text-sm">AI Tools You'll Master:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.aiTools.slice(0, 3).map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                        {course.aiTools.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.aiTools.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Next Batch */}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Next Batch Starts:</span>
                      </div>
                      <p className="text-sm text-green-700">
                        {new Date(course.upcomingBatches[0].startDate).toLocaleDateString('en-IN', { 
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                      <p className="text-xs text-green-600">{course.upcomingBatches[0].seats}</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-2">
                      <Button asChild className="w-full bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                        <Link href={`/courses/${course.slug}`} className="flex items-center justify-center gap-2">
                          View Full Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full text-adsmagnify-blue hover:bg-adsmagnify-yellow hover:text-adsmagnify-blue hover:border-adsmagnify-yellow">
                        <Link href="/contact">Book Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Comparison */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-adsmagnify-yellow">
              Compare Our Courses
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose the perfect course for your career goals and current experience level
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 text-adsmagnify-yellow font-semibold">Course</th>
                    <th className="p-4 text-adsmagnify-yellow font-semibold">Duration</th>
                    <th className="p-4 text-adsmagnify-yellow font-semibold">Price</th>
                    <th className="p-4 text-adsmagnify-yellow font-semibold">Best For</th>
                    <th className="p-4 text-adsmagnify-yellow font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {coursesData.map((course) => (
                    <tr key={course.slug} className="border-b border-gray-800 hover:bg-navy-800 transition-colors">
                      <td className="p-4">
                        <div>
                          <h3 className="font-semibold text-white mb-1">{course.shortName}</h3>
                          <p className="text-gray-400 text-sm">{course.mode}</p>
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{course.duration}</td>
                      <td className="p-4">
                        <div className="flex items-center text-adsmagnify-yellow font-bold">
                          <IndianRupee className="h-4 w-4" />
                          {course.priceINR.toLocaleString('en-IN')}
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-gray-300 text-sm">{course.whoItsFor[0]}</p>
                      </td>
                      <td className="p-4">
                        <Button asChild size="sm" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-medium">
                          <Link href={`/courses/${course.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-12">
              What's Included in Every Course
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Live Client Projects",
                  description: "Work with real budgets on actual campaigns",
                  icon: Target
                },
                {
                  title: "Shadow Internship", 
                  description: "10 hours of hands-on agency experience",
                  icon: Award
                },
                {
                  title: "AI Tools Training",
                  description: "Master ChatGPT-5, Gemini, Bolt.AI & more",
                  icon: Brain
                },
                {
                  title: "Job Placement Support",
                  description: "Resume building, interviews & networking",
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-adsmagnify-yellow p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-adsmagnify-blue" />
                    </div>
                    <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-adsmagnify-yellow text-adsmagnify-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Digital Marketing Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a free demo lecture and experience our teaching methodology. See real campaign results and meet your instructors before you commit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-blue hover:bg-navy-800 text-white hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Free Demo Lecture</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-adsmagnify-blue hover:bg-adsmagnify-blue hover:text-adsmagnify-yellow hover:scale-105 transform transition-all duration-200">
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
            "itemListElement": coursesData.map((course, index) => ({
              "@type": "Course",
              "position": index + 1,
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
              },
              "url": `https://adsmagnify.vercel.app/courses/${course.slug}`
            }))
          })
        }}
      />
    </div>
  );
}
