import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import CopyLinkButton from "@/components/common/copy-link-button";

// Import blog data
import blogData from "@/data/blog.json";

// Define the proper interface for params (Next.js 15 compatible)
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Generate static params for all blog pages
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Proper SEO-friendly metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Adsmagnify Academy Blog",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Adsmagnify Academy Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, digital marketing, AI marketing, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://adsmagnify.vercel.app/blog/${slug}`,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// ✅ Main component
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate table of contents from content headings
  const generateTOC = (content: string) => {
    const headings = content.match(/^## .+$/gm) || [];
    return headings.map((heading, index) => ({
      id: `heading-${index}`,
      title: heading.replace("## ", ""),
      anchor: heading.replace("## ", "").toLowerCase().replace(/\s+/g, "-"),
    }));
  };

  const tableOfContents = generateTOC(post.content);

  // Convert markdown-like content to HTML-like structure
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        if (paragraph.startsWith("# ")) {
          return `<h1 key="${index}" class="text-4xl font-bold text-navy-900 mb-6">${paragraph.replace(
            "# ",
            ""
          )}</h1>`;
        } else if (paragraph.startsWith("## ")) {
          const title = paragraph.replace("## ", "");
          const anchor = title.toLowerCase().replace(/\s+/g, "-");
          return `<h2 key="${index}" id="${anchor}" class="text-2xl font-bold text-navy-900 mb-4 mt-8">${title}</h2>`;
        } else if (paragraph.startsWith("### ")) {
          return `<h3 key="${index}" class="text-xl font-bold text-navy-900 mb-3 mt-6">${paragraph.replace(
            "### ",
            ""
          )}</h3>`;
        } else {
          return `<p key="${index}" class="text-gray-700 leading-relaxed mb-4">${paragraph}</p>`;
        }
      })
      .join("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mb-6 border-white text-adsmagnify-blue hover:bg-white hover:text-navy-900"
            >
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <h1 className="text-4xl text-adsmagnify-dark-yellow lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-navy-900 mb-4">
                        Table of Contents
                      </h3>
                      <nav className="space-y-2">
                        {tableOfContents.map((item, index) => (
                          <a
                            key={index}
                            href={`#${item.anchor}`}
                            className="block text-sm text-gray-600 hover:text-navy-900 transition-colors"
                          >
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8">
                    {/* Featured Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-8"
                    />

                    {/* Article Content */}
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: formatContent(post.content),
                      }}
                    />

                    {/* Share Section */}
                    <div className="border-t border-gray-200 pt-8 mt-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-navy-900 mb-2">
                            Share this article
                          </h4>
                          <div className="flex gap-2">
                            <CopyLinkButton size="sm" variant="outline" />
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-2">
                            Want to learn more?
                          </p>
                          <Button
                            asChild
                            className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200"
                          >
                            <Link href="/courses">View Our Courses</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-20 h-20 rounded-full object-contain bg-adsmagnify-blue"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {post.author}
                    </h3>
                    <p className="text-gray-600 mb-3">
                     Written and curated content by Adsmagnify Team.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://in.linkedin.com/company/adsmagnify">
                        Connect with Adsmagnify Team
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {blogData
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-adsmagnify-yellow text-adsmagnify-blue">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:bg-adsmagnify-yellow hover:text-adsmagnify-blue hover:border-adsmagnify-yellow hover:scale-105 transform transition-all duration-200"
                      >
                        <Link href={`/blog/${relatedPost.slug}`}>
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

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-adsmagnify-dark-yellow lg:text-4xl font-bold mb-4">
            Ready to Master Digital Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Turn these insights into practical skills with our hands-on
            AI-powered digital marketing courses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-adsmagnify-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200"
            >
              <Link href="/contact">Book Demo Lecture</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue font-semibold hover:scale-105 transform transition-all duration-200"
            >
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
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
              image: post.authorImage,
            },
            publisher: {
              "@type": "Organization",
              name: "Adsmagnify Academy",
              logo: {
                "@type": "ImageObject",
                url: "https://adsmagnify.vercel.app/images/logo.jpg",
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://adsmagnify.vercel.app/blog/${post.slug}`,
            },
            articleSection: post.category,
            wordCount: post.content.split(" ").length,
            timeRequired: post.readTime,
          }),
        }}
      />
    </div>
  );
}