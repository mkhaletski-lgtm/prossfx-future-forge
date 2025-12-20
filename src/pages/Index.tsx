import { useState } from 'react';
import cashbackBanner from '@/assets/cashback-banner.jpg';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FAQSection } from '@/components/FAQSection';
import { AdvisorSection } from '@/components/AdvisorSection';
import { Footer } from '@/components/Footer';
import { EmailFormModal } from '@/components/EmailFormModal';
import { ScrollToTop } from '@/components/ScrollToTop';

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
        
        {/* Cashback Banner */}
        <section className="w-full">
          <a 
            href="https://clck.ru/3PZZxD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={cashbackBanner} 
              alt="Кэшбэк на Форекс"
              className="w-full h-auto"
            />
          </a>
        </section>
      </main>
      <Footer />
      <EmailFormModal 
        isOpen={isEmailFormOpen} 
        onClose={() => setIsEmailFormOpen(false)} 
      />
      <ScrollToTop />
    </div>
  );
};

export default Index;
