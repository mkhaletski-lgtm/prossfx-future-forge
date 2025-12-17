import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { ShatterText, FloatingContainer } from './ShatterText';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

interface HeroSectionProps {
  onOpenEmailForm: () => void;
}

export function HeroSection({ onOpenEmailForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <Scene3D className="absolute inset-0 z-0" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.1)_0%,_transparent_70%)] z-10" />
      
      {/* Content */}
      <div className="container relative z-20 text-center px-4">
        <FloatingContainer>
          <ShatterText
            text="PROSSFX: Ваш путь к успешной торговле на Форекс"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-8 leading-tight"
            highlightWord="PROSSFX:"
          />
        </FloatingContainer>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Profit Success Forex trader community (PROSSFX) - cообщество прибыльных успешных трейдеров с опытом с 2006 года. Мы успешно прошли кризисы 2008 и 2010 годов, сохранив инвестиции
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto mb-10"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-display font-bold gradient-text">92.86%</span>
              <span className="text-muted-foreground">успешных сделок</span>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-display font-bold text-destructive">19+</span>
              <span className="text-muted-foreground">лет опыта</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <Button
            variant="telegram"
            size="lg"
            asChild
            className="w-full sm:w-auto"
          >
            <a href="https://t.me/PROSSFX_EA_bot" target="_blank" rel="noopener noreferrer">
              ПОЛУЧИТЬ СОВЕТНИКА БЕСПЛАТНО В ТЕЛЕГРАМ
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenEmailForm}
            className="w-full sm:w-auto"
          >
            <Mail className="mr-2" />
            ПОЛУЧИТЬ СОВЕТНИКА БЕСПЛАТНО НА E-MAIL
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
