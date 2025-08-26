import { Metadata } from "next";
import HeroSection from "@/components/common/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GalleryGrid from "@/components/common/gallery-grid";
import Link from "next/link";
import { Camera, Users, Laptop, Award, BookOpen, Coffee } from "lucide-react";
import CountUp from "@/components/common/count-up";

export const metadata: Metadata = {
  title: "Gallery - Classroom Photos & Student Activities | Adsmagnify Academy",
  description: "See our state-of-the-art classroom facilities, live project sessions, and student activities at Adsmagnify Academy in Churchgate, Mumbai.",
  keywords: "digital marketing classroom Mumbai, training facility photos, student activities, live projects, Churchgate academy",
  openGraph: {
    title: "Gallery - Classroom Photos & Student Activities | Adsmagnify Academy",
    description: "See our state-of-the-art classroom facilities, live project sessions, and student activities at Adsmagnify Academy in Churchgate, Mumbai.",
    url: "https://adsmagnify.vercel.app/gallery"
  }
};

export default function GalleryPage() {
  const galleryImages = [
    {
      category: "Classroom",
      title: "Modern Training Facility",
      description: "Our state-of-the-art classroom in Churchgate with latest technology",
      image: "/classroom.png",
      icon: <Laptop className="h-5 w-5" />
    },
    {
      category: "Students",
      title: "Small Batch Learning",
      description: "Interactive sessions with only 4 students per batch",
      image: "/students.png",
      icon: <Users className="h-5 w-5" />
    },
    {
      category: "Live Projects",
      title: "Real Campaign Management",
      description: "Students working on live client campaigns with real budgets",
      image: "/lp1.png",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      category: "Classroom",
      title: "Interactive Learning Environment",
      description: "Collaborative learning space designed for maximum engagement",
      image: "/c2.png",
      icon: <Laptop className="h-5 w-5" />
    },
    {
      category: "Students",
      title: "Graduation Day",
      description: "Celebrating successful completion of AI Performance Marketing course",
      image: "/s2.png",
      icon: <Award className="h-5 w-5" />
    },
    {
      category: "Live Projects",
      title: "Campaign Strategy Session",
      description: "Students presenting their campaign strategies to real clients",
      image: "/lp2.png",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const categories = ["All", "Classroom", "Students", "Live Projects"];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Learning Environment"
        subtitle="See Where Digital Marketing Excellence Happens"
        description="Take a virtual tour of our modern facilities, see our students in action, and witness the collaborative learning environment that makes Adsmagnify Academy special."
        ctaText="Visit Our Campus"
        ctaLink="/contact"
      />

      {/* Gallery Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <CountUp value={4} className="text-4xl font-bold text-navy-900 mb-2" />
              <div className="text-gray-600 font-medium">Students Per Batch</div>
            </div>
            <div>
              <CountUp value={1} className="text-4xl font-bold text-navy-900 mb-2" />
              <div className="text-gray-600 font-medium">Modern Classroom</div>
            </div>
            <div>
              <CountUp value={10} suffix="+" className="text-4xl font-bold text-navy-900 mb-2" />
              <div className="text-gray-600 font-medium">Live Projects Monthly</div>
            </div>
            <div>
              <CountUp value={100} suffix="%" className="text-4xl font-bold text-navy-900 mb-2" />
              <div className="text-gray-600 font-medium">Hands-on Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Experience Our Academy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our modern classroom facilities to live project sessions, see what makes our learning environment unique
            </p>
          </div>

          <GalleryGrid items={galleryImages} categories={categories} />
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Facility Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Laptop className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "Modern Technology",
                description: "Latest computers, high-speed internet, and professional software for hands-on learning"
              },
              {
                icon: <Users className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "Small Class Size",
                description: "Maximum 4 students per batch ensures personalized attention and better learning outcomes"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "Live Project Setup",
                description: "Dedicated workspace for managing real client campaigns and live projects"
              },
              {
                icon: <Award className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "AI Tools Access",
                description: "Premium subscriptions to all major AI marketing tools for student practice"
              },
              {
                icon: <Camera className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "Recording Studio",
                description: "Professional setup for creating video content and practicing presentations"
              },
              {
                icon: <Coffee className="h-8 w-8 text-adsmagnify-dark-yellow" />,
                title: "Comfortable Environment",
                description: "Air-conditioned classroom with comfortable seating and refreshment facilities"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-adsmagnify-light-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Prime Location in South Bombay
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our academy is strategically located in Churchgate, making it easily accessible from all parts of Mumbai
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-900 mb-2">Easy Commute</h3>
                  <p className="text-gray-600 text-sm">2 minutes walk from Churchgate Station</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-900 mb-2">Business District</h3>
                  <p className="text-gray-600 text-sm">Heart of Mumbai's financial center</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-900 mb-2">Weekend Classes</h3>
                  <p className="text-gray-600 text-sm">Perfect for working professionals</p>
                </CardContent>
              </Card>
            </div>

            <Button asChild size="lg" className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 hover:text-adsmagnify-yellow transform transition-all duration-200">
              <Link href="/contact">Schedule a Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-adsmagnify-dark-yellow">
            Ready to Experience Our Academy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a demo lecture and see our facilities firsthand. Experience our teaching methodology and meet our instructors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
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
            "@type": "ImageGallery",
            "name": "Adsmagnify Academy Gallery",
            "description": "Photos of our modern classroom facilities, student activities, and live project sessions",
            "url": "https://adsmagnify.vercel.app/gallery",
            "image": galleryImages.map(item => ({
              "@type": "ImageObject",
              "url": item.image,
              "name": item.title,
              "description": item.description,
              "contentUrl": item.image
            })),
            "publisher": {
              "@type": "Organization",
              "name": "Adsmagnify Academy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "PIL Court, G12, near New Central Excise Building, New Marine Lines",
                "addressLocality": "Churchgate",
                "addressRegion": "Mumbai",
                "postalCode": "400020",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
    </div>
  );
}