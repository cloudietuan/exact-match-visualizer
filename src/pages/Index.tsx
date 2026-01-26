import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import HorizontalScrollSection from '@/components/sections/HorizontalScrollSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div id="work">
        <HorizontalScrollSection />
      </div>
      <StatsSection />
      <ServicesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
