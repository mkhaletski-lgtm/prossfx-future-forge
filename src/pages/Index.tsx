import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FAQSection } from '@/components/FAQSection';
import { AdvisorSection } from '@/components/AdvisorSection';
import { Footer } from '@/components/Footer';
import { EmailFormModal } from '@/components/EmailFormModal';

const Index = () => {
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection onOpenEmailForm={() => setIsEmailFormOpen(true)} />
        <AboutSection />
        <AdvantagesSection />
        <ServicesSection />
        <FAQSection />
        <AdvisorSection onOpenEmailForm={() => setIsEmailFormOpen(true)} />
      </main>
      <Footer />
      <EmailFormModal 
        isOpen={isEmailFormOpen} 
        onClose={() => setIsEmailFormOpen(false)} 
      />
    </div>
  );
};

export default Index;
