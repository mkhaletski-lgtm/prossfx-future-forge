import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Check, Mail } from 'lucide-react';
import robotImage from '@/assets/robot.png';
import resultsImage from '@/assets/results.jpg';

const features = [
  'Полностью автоматическая торговля — робот открывает и сопровождает сделки сам.',
  'Без эмоциональных ошибок — советник строго следует алгоритму.',
  'Тестированная стратегия — на данных с 2006 года и в реальных рыночных условиях.',
  'Высокая точность сигналов — до 90% прибыльных сделок.',
  'Минимальные риски — контролируемая просадка и умное управление капиталом.',
];

const specifics = [
  'работает только с валютной парой EUR/USD — это наша специализация;',
  'использует усреднение по лучшей цене вместо жёстких стоп-лоссов;',
  'учитывает фундаментальные факторы и волатильность пары;',
  'полностью повторяет подход, который мы используем в ручной торговле.',
];

interface AdvisorSectionProps {
  onOpenEmailForm: () => void;
}

export function AdvisorSection({ onOpenEmailForm }: AdvisorSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advisor" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.1)_0%,_transparent_60%)]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,136,204,0.1)_0%,_transparent_60%)]" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Советник (Эксперт) <span className="gradient-text">PROSSFX</span>
          </h2>
          <p className="text-xl text-muted-foreground">Автоматизация торговли на Форекс</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Современный трейдинг меняется. Если раньше трейдеру приходилось сидеть у монитора часами, анализировать графики и новости, то сегодня значительную часть работы можно автоматизировать. Именно поэтому многие выбирают торговых роботов — советников.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              В PROSSFX — Сообществе прибыльных успешных трейдеров Форекс — мы разработали собственного советника, который позволяет нашим подписчикам торговать без погружения в технический и фундаментальный анализ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={robotImage}
                alt="Робот-советник для автоматической торговли на Форекс"
                className="max-w-full h-auto max-h-[400px] drop-shadow-2xl"
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Why traders choose */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Почему трейдеры выбирают советник <span className="gradient-text">PROSSFX</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                <span className="text-foreground text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Особенности советника <span className="gradient-text">PROSSFX:</span>
          </h3>
          <ul className="max-w-2xl mx-auto space-y-3">
            {specifics.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-center uppercase">
            Результат торговли советника (эксперта) PROSSFX в 2025 году
          </h3>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Совокупная чистая прибыль составила <span className="text-primary font-bold">218.58 USD</span> при начальном депозите 200 USD — это рост капитала более чем на <span className="text-primary font-bold">109%</span> без участия трейдера!
          </p>
          
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src={resultsImage}
              alt="Результаты торговли советника PROSSFX в 2025 году"
              className="w-full h-auto"
            />
          </div>

          <p className="text-center text-lg text-muted-foreground mb-8">
            Хотите, чтобы ваш капитал работал 24/5, даже пока вы спите? Советник PROSSFX — это ваш личный трейдер, который торгует по проверенной стратегии и приносит прибыль без эмоций и ошибок.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center w-full max-w-xl mx-auto px-4">
            <Button variant="telegram" size="lg" asChild className="w-full text-xs sm:text-sm whitespace-normal h-auto py-3">
              <a href="https://t.me/PROSSFX_EA_bot" target="_blank" rel="noopener noreferrer">
                ПОЛУЧИТЬ СОВЕТНИКА БЕСПЛАТНО В ТЕЛЕГРАМ
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={onOpenEmailForm} className="w-full text-xs sm:text-sm whitespace-normal h-auto py-3">
              <Mail className="mr-2 icon-glow flex-shrink-0" />
              ПОЛУЧИТЬ СОВЕТНИКА БЕСПЛАТНО НА E-MAIL
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
