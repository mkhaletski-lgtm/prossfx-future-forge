import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.08)_0%,_transparent_60%)]" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">PROSSFX:</span> Опыт, которому доверяют с 2006 года
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы - команда профессиональных трейдеров на рынке Форекс с опытом торговли на реальных счетах и доверительном управлении с 2006 года. Наша миссия — помочь трейдерам успешно зарабатывать на рынке Форекс, используя наши знания и опыт.
            </p>
            
            <blockquote className="glass rounded-xl p-6 border-l-4 border-primary">
              <p className="text-xl italic text-foreground">
                "Пришло время принести пользу большому количеству трейдеров."
              </p>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              По статистике 95% начинающих трейдеров теряют свои деньги. Мы также проходили через такие ситуации. Основная причина — отсутствие опыта, навыков, психологической устойчивости и понимания рынка Форекс. Именно поэтому мы создали PROSSFX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold gradient-text">19+</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">Лет опыта</span>
                  <p className="text-muted-foreground">на реальных счетах</p>
                </div>
              </div>
              
              <div className="h-px bg-border" />
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold gradient-text">2008</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">Кризис пройден</span>
                  <p className="text-muted-foreground">инвестиции сохранены</p>
                </div>
              </div>
              
              <div className="h-px bg-border" />
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold gradient-text">EUR</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">EUR/USD</span>
                  <p className="text-muted-foreground">узкая специализация</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
