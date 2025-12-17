import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send } from 'lucide-react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contacts" className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Контакты
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <motion.a
            href="https://t.me/PROSSFX"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-6 flex items-center gap-4 hover-lift"
          >
            <div className="w-14 h-14 rounded-xl bg-telegram/20 flex items-center justify-center">
              <Send className="w-7 h-7 text-telegram" />
            </div>
            <div>
              <span className="block font-semibold text-foreground">Telegram канал</span>
              <span className="text-muted-foreground">@PROSSFX</span>
            </div>
          </motion.a>

          <motion.a
            href="https://t.me/PROSSFX_EA_bot"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-6 flex items-center gap-4 hover-lift"
          >
            <div className="w-14 h-14 rounded-xl bg-telegram/20 flex items-center justify-center">
              <Send className="w-7 h-7 text-telegram" />
            </div>
            <div>
              <span className="block font-semibold text-foreground">Telegram бот</span>
              <span className="text-muted-foreground">@PROSSFX_EA_bot</span>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                P
              </div>
              <div>
                <span className="font-display font-bold text-foreground">PROSSFX</span>
                <span className="block text-xs text-muted-foreground">Profit Success Forex Trader Community</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2006-2025 PROSSFX. Все права защищены.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
