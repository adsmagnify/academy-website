import { Metadata } from "next";
import HeroSection from "@/components/common/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

// Import blog data
import blogData from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | AI Marketing Tips & Strategies | Adsmagnify Academy",
  description: "Stay updated with the latest AI-powered digital marketing trends, performance marketing strategies, and SEO tips from industry experts at Adsmagnify Academy.",
  keywords: "digital marketing blog, AI marketing trends, performance marketing tips, SEO strategies, Mumbai digital marketing",
  openGraph: {
    title: "Digital Marketing Blog | AI Marketing Tips & Strategies | Adsmagnify Academy",
    description: "Stay updated with the latest AI-powered digital marketing trends, performance marketing strategies, and SEO tips from industry experts.",
    url: "https://adsmagnify.vercel.app/blog"
  }
};

export default function BlogPage() {
  const featuredPost = blogData[0];
  const otherPosts = blogData.slice(1);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Digital Marketing Insights & Strategies"
        subtitle="Stay Ahead with AI-Powered Marketing Knowledge"
        description="Discover the latest trends, strategies, and insights in AI-powered digital marketing, performance advertising, and SEO from our industry experts."
        ctaText="Join Our Course"
        ctaLink="/courses"
      />

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Featured Article
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="bg-adsmagnify-light-yellow text-adsmagnify-blue mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="bg-adsmagnify-dark-yellow hover:bg-adsmagnify-blue hover:text-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more insights and strategies to enhance your digital marketing knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {otherPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-adsmagnify-dark-yellow text-adsmagnify-blue">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full bg-white text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:border-adsmagnify-dark-yellow hover:scale-105 transform transition-all duration-200">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest digital marketing trends, AI tools updates, and course announcements delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button asChild size="lg" className="bg-adsmagnify-dark-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200">
              <Link href="/contact">Subscribe to Updates</Link>
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
            "@type": "Blog",
            "name": "Adsmagnify Academy Blog",
            "description": "Digital marketing insights, AI-powered strategies, and industry trends",
            "url": "https://adsmagnify.vercel.app/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Adsmagnify Academy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adsmagnify.vercel.app/images/logo.jpg"
              }
            },
            "blogPost": blogData.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": post.image,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.publishedAt,
              "url": `https://adsmagnify.vercel.app/blog/${post.slug}`
            }))
          })
        }}
      />
    </div>
  );
}