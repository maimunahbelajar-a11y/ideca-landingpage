import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainSolutionSection from '@/components/PainSolutionSection';
import MateriSection from '@/components/MateriSection';
import BenefitSection from '@/components/BenefitSection';
import PemateriSection from '@/components/PemateriSection';
import TestimoniSection from '@/components/TestimoniSection';
import PricingSection from '@/components/PricingSection';
import JadwalSection from '@/components/JadwalSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainSolutionSection />
      <MateriSection />
      <BenefitSection />
      <PemateriSection />
      <TestimoniSection />
      <JadwalSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
