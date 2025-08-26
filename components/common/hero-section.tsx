import { Button } from "@/components/ui/button";
import CountUp from "@/components/common/count-up";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  badge?: string;
}

const HeroSection = ({
  title,
  subtitle, 
  description,
  ctaText = "Book Demo Lecture",
  ctaLink = "/contact",
  backgroundImage,
  badge
}: HeroSectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-adsmagnify-blue via-adsmagnify-dark-blue to-navy-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-adsmagnify-dark-yellow rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-adsmagnify-dark-yellow rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-float" style={{animationDelay: '2s'}}></div>
      
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-adsmagnify-blue/80"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {badge && (
            <div className="inline-block bg-white-contrast text-visible-blue px-8 py-4 rounded-full text-sm font-bold mb-8 animate-fade-in-scale animate-pulse-glow font-satoshi">
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up text-visible-white-on-dark font-unbounded">
            {title}
          </h1>
          
          <p className="text-xl lg:text-3xl text-visible-yellow mb-8 font-bold animate-fade-in-up stagger-2 font-satoshi">
            {subtitle}
          </p>
          
          {description && (
            <p className="text-lg lg:text-xl text-visible-white-on-dark mb-12 leading-relaxed animate-fade-in-up stagger-3 max-w-4xl mx-auto font-satoshi">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-adsmagnify-dark-yellow text-adsmagnify-blue font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-magnetic font-satoshi"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white bg-white text-adsmagnify-blue hover:bg-adsmagnify-dark-yellow hover:text-adsmagnify-blue hover:hover-tilt shadow-lg text-lg px-10 py-6 font-satoshi"
            >
              <a href="tel:+917700090236">Call +91 7700090236</a>
            </Button>
          </div>

          {/* Floating elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white-contrast p-6 rounded-xl animate-fade-in-up stagger-5 hover-lift">
              <CountUp value={15} suffix="+" className="text-3xl font-bold text-visible-blue mb-2 font-unbounded" />
              <div className="text-sm text-visible-dark font-satoshi">Students Trained</div>
            </div>
            <div className="bg-white-contrast p-6 rounded-xl animate-fade-in-up stagger-6 hover-lift">
              <CountUp value={85} suffix="%" className="text-3xl font-bold text-visible-blue mb-2 font-unbounded" />
              <div className="text-sm text-visible-dark font-satoshi">Placement Rate</div>
            </div>
            <div className="bg-white-contrast p-6 rounded-xl animate-fade-in-up stagger-5 hover-lift">
              <span className="text-3xl font-bold text-visible-blue mb-2 font-unbounded">
                ₹<CountUp value={50} suffix="cr+" />
              </span>
              <div className="text-sm text-visible-dark font-satoshi">Avg. Ad Spend</div>
            </div>
            <div className="bg-white-contrast p-6 rounded-xl animate-fade-in-up stagger-6 hover-lift">
              <span className="text-3xl font-bold text-visible-blue mb-2 font-unbounded">
                <CountUp value={4} />★
              </span>
              <div className="text-sm text-visible-dark font-satoshi">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;