import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Clock, Zap, BarChart3, Clock4 } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.1)_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,136,204,0.1)_0%,_transparent_60%)]" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Как <span className="gradient-text">PROSSFX</span> помогает вам зарабатывать?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trading Signals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            
            <h3 className="text-2xl font-display font-bold mb-4">
              Готовые торговые сигналы <span className="gradient-text">PROSSFX</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Публикуются в рабочее время (09:00–22:00 МСК) по паре EUR/USD. Не нужно учиться теханализу или следить за новостями — достаточно открыть сделку по сигналу.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Бесплатный Telegram-канал (с задержкой)',
                'Платный канал (мгновенно)',
                '2-5 сигналов в месяц',
                'Прибыль от 20 до 300 пунктов',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" asChild>
              <a href="#faq">Узнать подробнее</a>
            </Button>
          </motion.div>

          {/* Expert Advisor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            
            <h3 className="text-2xl font-display font-bold mb-4">
              Советник (Эксперт) <span className="gradient-text">PROSSFX</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Торговый робот для MetaTrader, который открывает и сопровождает сделки автоматически. Работает 24/5, без эмоций, по стратегии сообщества.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Clock, label: 'Экономия времени' },
                { icon: Zap, label: 'Минимум знаний' },
                { icon: BarChart3, label: 'Реальные результаты' },
                { icon: Clock4, label: 'Работает круглосуточно' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" asChild>
              <a href="#advisor">Узнать подробнее</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
