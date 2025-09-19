import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Trust Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="mr-2">🔥</span>
          TRUSTED BY 350,000+ USERS
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Humanize AI Text & 
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Outsmart AI Detectors
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Natural Write converts your AI-generated content into fully humanized, 
          undetectable writing—ensuring it passes every AI detection tool
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-3 font-semibold"
        >
          Try for free
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          No credit card required
        </p>
      </div>
    </section>
  );
};

export default HeroSection;