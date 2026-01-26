import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import ProblemSection from '@/components/sections/ProblemSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PricingSection from '@/components/sections/PricingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <StatsSection />
      <FeaturesSection />
      <PortfolioSection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
