const SocialProof = () => {
  const detectors = [
    { name: "Turnitin", logo: "🎓" },
    { name: "Copyleaks", logo: "📄" },
    { name: "ZeroGPT", logo: "🤖" },
    { name: "QuillBot", logo: "✍️" },
    { name: "Grammarly", logo: "📝" },
    { name: "GPTZero", logo: "🔍" }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Bypass AI content detectors
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {detectors.map((detector, index) => (
            <div 
              key={detector.name}
              className="flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-smooth"
            >
              <div className="w-16 h-16 bg-background rounded-lg shadow-md flex items-center justify-center text-2xl border border-border/50">
                {detector.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {detector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;