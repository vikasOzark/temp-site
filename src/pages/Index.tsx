
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyAgentCoreSection from "@/components/WhyAgentCoreSection";
import StatsSection from "@/components/StatsSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import TryItNowSection from "@/components/TryItNowSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyAgentCoreSection />
        <StatsSection />
        <KeyFeaturesSection />
        <TryItNowSection />
      </main>
    </div>
  );
};

export default Index;
