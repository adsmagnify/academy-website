import { Metadata } from "next";
import HeroSection from "@/components/common/hero-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Adsmagnify Academy",
  description: "Get answers to common questions about our AI digital marketing courses, admissions, fees, placement support, and more at Adsmagnify Academy Mumbai.",
  keywords: "digital marketing course FAQ, AI marketing training questions, course fees Mumbai, placement support, batch size",
  openGraph: {
    title: "Frequently Asked Questions | Adsmagnify Academy",
    description: "Get answers to common questions about our AI digital marketing courses, admissions, fees, placement support, and more.",
    url: "https://adsmagnify.vercel.app/faq"
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Course Information",
      questions: [
        {
          question: "What makes your courses different from online courses?",
          answer: "Our courses offer in-person instruction with only 4 students per batch, live client projects with real budgets, and a 10-hour shadow internship where you work alongside our team on actual client campaigns. You get personalized attention and hands-on experience that online courses can't provide."
        },
        {
          question: "Do I need prior experience in marketing?",
          answer: "No prior experience required. Our courses are designed for beginners, but we also accommodate students with some marketing background by customizing the pace and depth of content based on individual needs."
        },
        {
          question: "What AI tools will I learn?",
          answer: "You'll master ChatGPT-5, Gemini, Bolt.AI, Heygen, and ElevenLabs. We teach you how to integrate these tools into your marketing workflows for maximum efficiency and results."
        },
        {
          question: "How many students are in each batch?",
          answer: "We maintain a maximum of 4 students per batch to ensure personalized attention, quality mentorship, and better learning outcomes for every student."
        }
      ]
    },
    {
      category: "Admissions & Fees",
      questions: [
        {
          question: "What are the course fees?",
          answer: "AI Performance Marketing Course: ₹15,000 (8 weeks), AI SEO Course: ₹10,000 (4 weeks), Advanced Digital Marketing Course: ₹25,000 (12 weeks). All courses include live projects, shadow internship, and AI tools training."
        },
        {
          question: "Can I pay in installments?",
          answer: "Yes! Pay ₹2,000 as registration fee and the remaining amount in flexible monthly installments. We work with you to create a payment plan that fits your budget."
        },
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a full refund if you're not satisfied after the first week of classes. We're confident in our teaching quality and want you to be completely satisfied."
        },
        {
          question: "What documents do I need for admission?",
          answer: "You need a government-issued ID proof, educational certificates, and passport-size photographs. No specific educational background is required."
        }
      ]
    },
    {
      category: "Classes & Schedule",
      questions: [
        {
          question: "When are the classes held?",
          answer: "Classes are held on weekends (Saturdays and Sundays) from 10:00 AM to 6:00 PM, specially designed for working professionals and students. Sessions are conducted in small batches of 4 students each, with 2-hour classes per batch to ensure personalized attention."
        },
        {
          question: "What if I miss a class?",
          answer: "With our small batch size, we can accommodate make-up sessions. We also provide one-on-one catch-up time with the instructor."
        },
        {
          question: "Where are the classes conducted?",
          answer: "Our academy is located at PIL Court, G12, near New Central Excise Building, New Marine Lines, Churchgate, Mumbai - just 2 minutes walk from Churchgate Station."
        },
        {
          question: "How long are the courses?",
          answer: "AI Performance Marketing: 8 weeks, AI SEO: 4 weeks, Advanced Digital Marketing: 12 weeks. All courses include weekend batches with comprehensive curriculum."
        }
      ]
    },
    {
      category: "Career Support",
      questions: [
        {
          question: "Is job placement guaranteed?",
          answer: "While we can't guarantee placement, 95% of our graduates secure marketing roles within 3 months. We provide resume building, interview preparation, and direct connections to hiring companies."
        },
        {
          question: "What kind of jobs can I get after the course?",
          answer: "Our graduates work as Digital Marketing Executives, Performance Marketing Specialists, SEO Analysts, Social Media Managers, and Marketing Consultants at companies like Reliance, Nykaa, Swiggy, and Paytm."
        },
        {
          question: "Do you provide certificates?",
          answer: "Yes, you'll receive a course completion certificate from Adsmagnify Academy, plus we help you prepare for Google Ads and Meta Blueprint certifications."
        },
        {
          question: "What is the shadow internship?",
          answer: "It's a 10-hour hands-on experience where you work alongside our team on real client projects, participate in client calls, and gain practical agency experience."
        }
      ]
    },
    {
      category: "Technical Requirements",
      questions: [
        {
          question: "Do I need to bring my own laptop?",
          answer: "While we have computers available, we recommend bringing your own laptop so you can practice and work on assignments at home using familiar software."
        },
        {
          question: "What software will I need?",
          answer: "We'll provide access to all necessary tools and software during the course. For AI tools, we'll help you set up accounts and provide guidance on premium subscriptions."
        },
        {
          question: "Is there any age limit for the courses?",
          answer: "No age limit. We welcome students from 18 to 45 years old. Our teaching methodology adapts to different learning styles and backgrounds."
        },
        {
          question: "Can I switch between courses?",
          answer: "Yes, you can upgrade to a higher course within the first week. Please note that downgrades are not allowed. We also offer the Advanced Digital Marketing course, which combines both Performance Marketing and SEO."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Get All Your Questions Answered"
        description="Find answers to common questions about our AI-powered digital marketing courses, admissions process, fees, and career support."
        ctaText="Still Have Questions?"
        ctaLink="/contact"
      />

      {/* Quick Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Need Immediate Help?</h2>
            <p className="text-gray-600 mb-6">Can't find what you're looking for? Get in touch with us directly.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-adsmagnify-blue text-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue">
                <a href="tel:+917700090236">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 7700090236
                </a>
              </Button>
              <Button asChild className="bg-adsmagnify-blue text-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue">
                <a href="https://wa.me/917700090236" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-adsmagnify-light-yellow p-2 rounded-full">
                    <HelpCircle className="h-6 w-6 text-adsmagnify-dark-yellow" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900">{category.category}</h2>
                </div>
                
                <Accordion type="multiple" className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`} 
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="hover:no-underline text-left">
                        <span className="font-semibold text-navy-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Lecture CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl text-adsmagnify-dark-yellow font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a demo lecture and get all your questions answered by our expert instructors. 
            Experience our teaching methodology firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-black font-semibold hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Book Demo Lecture</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:scale-105 transform transition-all duration-200">
              <Link href="/courses">View All Courses</Link>
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
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(category => 
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
}