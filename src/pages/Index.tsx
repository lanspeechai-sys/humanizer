import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TextProcessor from "@/components/TextProcessor";
import SocialProof from "@/components/SocialProof";
import ProcessSteps from "@/components/ProcessSteps";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TextProcessor />
        <SocialProof />
        <ProcessSteps />
      </main>
    </div>
  );
};

export default Index;
