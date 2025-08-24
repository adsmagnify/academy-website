import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

// Import blog data
import blogData from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Blog | Adsmagnify Academy - AI Marketing Insights & Strategies",
  description: "Stay updated with the latest AI-powered marketing trends, strategies, and insights from industry experts at Adsmagnify Academy.",
  keywords: "digital marketing blog, AI marketing, performance marketing, SEO, paid advertising, marketing trends",
  openGraph: {
    title: "Blog | Adsmagnify Academy",
    description: "Latest AI marketing insights and strategies",
    url: "https://adsmagnify.vercel.app/blog",
    images: [
      {
        url: "https://adsmagnify.vercel.app/images/blog-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Adsmagnify Academy",
    description: "Latest AI marketing insights and strategies",
    images: ["https://adsmagnify.vercel.app/images/blog-hero.jpg"],
  },
};

export default function BlogPage() {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogData].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Get unique categories for filtering
  const categories = [...new Set(blogData.map(post => post.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-adsmagnify-dark-yellow">
              Marketing Insights & Strategies
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay ahead with AI-powered marketing trends, actionable strategies, 
              and industry insights from digital marketing experts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="border-adsmagnify-yellow text-adsmagnify-yellow hover:bg-adsmagnify-yellow hover:text-navy-900 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {sortedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                Featured Article
              </h2>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={sortedPosts[0].image}
                      alt={sortedPosts[0].title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue">
                        {sortedPosts[0].category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-navy-900 mb-4 line-clamp-3">
                      {sortedPosts[0].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-4 text-lg">
                      {sortedPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{sortedPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(sortedPosts[0].publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{sortedPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <Button
                      asChild
                      size="lg"
                      className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200 self-start"
                    >
                      <Link href={`/blog/${sortedPosts[0].slug}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              All Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.slice(1).map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3 min-h-[4.5rem]">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full hover:bg-adsmagnify-yellow hover:text-adsmagnify-blue hover:border-adsmagnify-yellow hover:scale-105 transform transition-all duration-200"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-adsmagnify-dark-yellow lg:text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest AI marketing insights and strategies delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200"
              >
                <Link href="/contact">Subscribe Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
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
            name: "Adsmagnify Academy Blog",
            description: "AI-powered marketing insights and strategies",
            url: "https://adsmagnify.vercel.app/blog",
            publisher: {
              "@type": "Organization",
              name: "Adsmagnify Academy",
              logo: {
                "@type": "ImageObject",
                url: "https://adsmagnify.vercel.app/images/logo.jpg",
              },
            },
            blogPost: sortedPosts.map(post => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              url: `https://adsmagnify.vercel.app/blog/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author,
              },
            })),
          }),
        }}
      />
    </div>
  );
}