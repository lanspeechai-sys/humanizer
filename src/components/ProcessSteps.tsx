const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Paste Your Text",
      description: "Paste any content — homework, assignment, or AI-generated draft",
      icon: "📝"
    },
    {
      number: "2", 
      title: "Check AI Score",
      description: "See how much of your text is considered human-written",
      icon: "📊"
    },
    {
      number: "3",
      title: "Humanize",
      description: "Rewrite your text to sound 100% human-written and pass AI detection",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Humanize AI Writing in 3 Simple Steps
        </h2>
        <p className="text-lg text-muted-foreground mb-16">
          Perfect for essays, assignments, blog posts and research papers
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-glow-primary">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Step {step.number}
                </h3>
                <h4 className="text-lg font-medium text-foreground mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;