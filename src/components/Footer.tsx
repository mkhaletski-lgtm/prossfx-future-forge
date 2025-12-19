import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail } from 'lucide-react';
import logoImage from '@/assets/logo.png';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contacts" className="py-12 relative overflow-hidden bg-secondary/50" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Logo and description */}
          <div className="space-y-4">
            <a 
              href="https://prossfx.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="PROSSFX - cообщество прибыльных успешных трейдеров" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm">
              Сообщество прибыльных успешных трейдеров Форекс
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ссылки</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-2">
              <a
                href="https://t.me/PROSSFX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="w-4 h-4 icon-glow" />
                Telegram канал
              </a>
              <a
                href="https://t.me/PROSSFX_EA_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="w-4 h-4 icon-glow" />
                Telegram бот
              </a>
              <a
                href="mailto:prossfx@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 icon-glow" />
                prossfx@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 pt-6 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 PROSSFX. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            Дисклеймер: Торговля на Форекс сопряжена с высокими рисками и может привести к потере капитала. 
            Прошлые результаты не гарантируют будущих доходов. Всегда оценивайте свои риски.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
