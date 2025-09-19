import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">Natural Write</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
            AI Humanizer
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
            Blog
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
            Contact
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-medium"
          >
            Try for free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;