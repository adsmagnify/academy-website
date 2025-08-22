import { Metadata } from "next";
import HeroSection from "@/components/common/hero-section";
import CourseCard from "@/components/common/course-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X, IndianRupee } from "lucide-react";

// Import course data
import coursesData from "@/data/courses.json";

export const metadata: Metadata = {
  title: "AI Digital Marketing Courses in Mumbai | Performance Marketing & SEO Training",
  description: "Choose from AI Performance Marketing and AI SEO courses in Mumbai. Small batch sizes (4 students), live projects, shadow internships. Weekend batches available in Churchgate.",
  keywords: "digital marketing courses Mumbai, AI marketing course, performance marketing training, SEO course Mumbai, Google Ads certification, Meta Ads training",
  openGraph: {
    title: "AI Digital Marketing Courses in Mumbai | Adsmagnify Academy",
    description: "Choose from AI Performance Marketing and AI SEO courses in Mumbai. Small batch sizes (4 students), live projects, shadow internships.",
    url: "https://adsmagnify.vercel.app/courses"
  }
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="AI-Powered Digital Marketing Courses"
        subtitle="Choose Your Path to Digital Marketing Mastery"
        description="Two comprehensive courses designed to make you job-ready in performance marketing or SEO. Learn with AI tools, real projects, and personalized mentorship."
        ctaText="Compare Courses"
        ctaLink="#comparison"
      />

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Course Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both courses include live projects, AI tools training, and 10-hour shadow internships
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coursesData.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Course Comparison */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Course Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our courses to find the perfect fit for your career goals
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">AI Performance Marketing</th>
                    <th className="px-6 py-4 text-center">AI SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Duration</td>
                    <td className="px-6 py-4 text-center">6 Weeks</td>
                    <td className="px-6 py-4 text-center">4 Weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Price</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center text-lg font-bold">
                        <IndianRupee className="h-4 w-4" />15,000
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center text-lg font-bold">
                        <IndianRupee className="h-4 w-4" />10,000
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Batch Size</td>
                    <td className="px-6 py-4 text-center">4 Students Only</td>
                    <td className="px-6 py-4 text-center">4 Students Only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Shadow Internship</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Live Client Projects</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">AI Tools Training</td>
                    <td className="px-6 py-4 text-center">5 Tools</td>
                    <td className="px-6 py-4 text-center">3 Tools</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Google Ads</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Meta Ads</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">SEO & Content</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Technical SEO</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Why Our Courses Stand Out
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-First AI Integration",
                description: "Learn the latest AI tools that are actually used by top agencies and in-house marketing teams."
              },
              {
                title: "Real Client Experience",
                description: "Work on live campaigns with real budgets, not just theoretical case studies."
              },
              {
                title: "Small Batch Sizes",
                description: "Maximum 4 students per batch ensures personalized attention and mentorship."
              },
              {
                title: "Shadow Internship Included",
                description: "10 hours of real agency experience with client calls and project management."
              },
              {
                title: "Weekend Classes",
                description: "Designed for working professionals with flexible weekend schedules."
              },
              {
                title: "Job Placement Support",
                description: "Career coaching, interview preparation, and direct connections to hiring companies."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-adsmagnify-dark-yellow lg:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a demo lecture to experience our teaching methodology and see if our courses are right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-black font-semibold hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Demo Lecture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Schema Markup */}
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
                "name": "Adsmagnify Academy",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                }
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "offline",
                "duration": course.duration,
                "price": course.priceINR,
                "priceCurrency": "INR",
                "location": {
                  "@type": "Place",
                  "name": "Adsmagnify Academy",
                  "address": "Churchgate, Mumbai"
                }
              },
              "audience": {
                "@type": "Audience",
                "educationRequirements": "Basic computer skills"
              }
            }))
          })
        }}
      />
    </div>
  );
}