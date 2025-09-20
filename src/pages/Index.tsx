// ScrollingBanner and Navigation are now rendered site-wide in App.tsx
import { HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSectionClean";
import { MagazineSection } from "@/components/MagazineSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { WhyAttendSection } from "@/components/WhyAttendSection";
import { PricingSection } from "@/components/PricingSection";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <WhyAttendSection />
      <MagazineSection />
    </div>
  );
};

export default Index;
