import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, IndianRupee, Star, Zap, Target } from "lucide-react";

interface CourseCardProps {
  slug: string;
  name: string;
  shortName: string;
  priceINR: number;
  duration: string;
  mode: string;
  overview: string;
  aiTools: string[];
}

const CourseCard = ({
  slug,
  name,
  shortName,
  priceINR,
  duration,
  mode,
  overview,
  aiTools
}: CourseCardProps) => {
  // Define marketing tools based on course slug
  const getMarketingToolsBySlug = (courseSlug: string): string[] => {
    switch (courseSlug) {
      case "advanced-digital-marketing":
        return [
          "Meta Ads",
          "Google Ads", 
          "LinkedIn Ads",
          "Pinterest",
          "Google Search Console",
          "Google My Business",
          "Google Analytics",
          "SEMrush"
        ];
      case "ai-performance-marketing":
        return [
          "Meta Ads",
          "Google Ads",
          "LinkedIn Ads",
          "Pinterest"
        ];
      case "ai-seo":
        return [
          "Google Search Console",
          "Google My Business", 
          "Google Analytics",
          "SEMrush"
        ];
      default:
        return [
          "Meta Ads",
          "Google Ads", 
          "LinkedIn Ads",
          "Pinterest",
          "Google Analytics",
          "SEMrush"
        ];
    }
  };

  // Get marketing tool logos
  const getMarketingToolLogo = (tool: string): string => {
    const logoMap: Record<string, string> = {
      "meta ads": "/meta.png",
      "google ads": "/google.png",
      "linkedin ads": "/linkedin.png",
      "pinterest": "/pinterest.png",
      "google search console": "/google_search_console.png",
      "google my business": "/google_my_business.png",
      "google analytics": "/google_analytics.png",
      "semrush": "/semrush.png"
    };
    
    return logoMap[tool.toLowerCase()] || "/logo.png";
  };

  const marketingTools = getMarketingToolsBySlug(slug);

  return (
    <Card className="h-full hover-lift bg-white-contrast border-gray-200 hover:border-adsmagnify-dark-yellow group relative overflow-hidden shadow-lg">
      {/* Animated background shimmer */}
      <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating badge */}
      {slug === "advanced-digital-marketing" && (
        <div className="absolute -top-2 -right-2 bg-adsmagnify-dark-yellow text-visible-blue px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow font-satoshi">
          Popular
        </div>
      )}

      <CardHeader className="pb-4 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-visible-blue font-semibold font-satoshi">
            {mode}
          </Badge>
          <div className="text-right">
            <div className="flex items-center text-2xl font-bold text-visible-blue font-unbounded">
              <IndianRupee className="h-5 w-5" />
              {priceINR.toLocaleString()}
            </div>
            <div className="text-sm text-visible-dark font-satoshi">+ EMI Options</div>
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-visible-dark leading-tight group-hover:text-visible-blue transition-colors font-unbounded">
          {name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <p className="text-visible-dark text-sm leading-relaxed line-clamp-3 font-satoshi">
          {overview}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-visible-dark font-satoshi">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-4 w-4 text-visible-blue" />
            </div>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-visible-dark font-satoshi">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-visible-blue" />
            </div>
            <span>Only 4 Students per Batch</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-visible-dark font-satoshi">
            <div className="bg-blue-100 p-2 rounded-full">
              <MapPin className="h-4 w-4 text-visible-blue" />
            </div>
            <span>Churchgate, Mumbai</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm font-medium text-visible-dark flex items-center gap-2 font-satoshi">
            <Zap className="h-4 w-4 text-visible-yellow" />
            AI Tools You'll Master:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {(() => {
              const logoSrcByTool: Record<string, string> = {
                "chatgpt": "/chatgpt5.png",
                "chatgpt-5": "/chatgpt5.png",
                "gemini": "/gemini.png",
                "bolt.ai": "/bolt.png",
                "boltai": "/bolt.png",
                "heygen": "/heygen.png",
                "elevenlabs": "/elevenlabs.png",
                "perplexity": "/perplexity.png",
                "veo3": "/veo3.png",
                "heraai": "/hera_ai.png",
                "hera": "/hera_ai.png",
              };
              
              // Show all AI tools that should be displayed
              const allAiTools = [
                "ChatGPT-5",
                "Gemini", 
                "Bolt.AI",
                "Heygen",
                "ElevenLabs",
                "Perplexity",
                "Veo3",
                "Hera AI"
              ];
              
              return allAiTools.map((tool, idx) => {
                const key = tool.toLowerCase().replace(/\s+/g, "");
                const src = logoSrcByTool[key] || "/logo.png";
                return (
                  <div key={`${key}-${idx}`} className="w-8 h-8 rounded-md bg-white shadow-sm overflow-hidden flex items-center justify-center">
                    <img src={src} alt={`${tool} logo`} className="w-6 h-6 object-contain" />
                  </div>
                );
              });
            })()}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-visible-dark flex items-center gap-2 font-satoshi">
          <Zap className="h-4 w-4 text-visible-yellow" />
          Marketing & SEO Tools You'll Use:
          </p>
          <div className={`grid gap-3 ${marketingTools.length <= 4 ? 'grid-cols-4' : marketingTools.length <= 6 ? 'grid-cols-3' : 'grid-cols-4'}`}>
            {marketingTools.map((tool, idx) => (
              <div key={`marketing-${idx}`} className="w-8 h-8 rounded-md bg-white shadow-sm overflow-hidden flex items-center justify-center">
                <img 
                  src={getMarketingToolLogo(tool)} 
                  alt={`${tool} logo`} 
                  className="w-6 h-6 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          {[
            "Live Client Projects",
            "10-Hour Shadow Internship", 
            "Job Placement Support",
            "Weekend Classes"
          ].map((feature, index) => (
            <div key={feature} className="flex items-center gap-2 text-xs text-visible-dark font-satoshi">
              <Star className="h-3 w-3 text-visible-yellow fill-current" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <Button 
              asChild 
              className="flex-1 btn-secondary hover:scale-105 transform transition-all duration-300 shadow-md"
            >
              <Link href={`/courses/${slug}`}>View Details</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 btn-outline hover:scale-105 transform transition-all duration-300"
            >
              <Link href="/contact">Book Demo</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
