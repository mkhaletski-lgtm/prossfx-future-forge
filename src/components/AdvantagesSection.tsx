import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Target, Brain, Focus, TrendingUp, DollarSign } from 'lucide-react';

const advantages = [
  {
    icon: CheckCircle,
    title: 'Проверенная стратегия',
    description: 'Мы работаем только по проверенной торговой системе. Наши сигналы основаны на фундаментальном и техническом анализе.',
  },
  {
    icon: Target,
    title: 'Торговля без многолетнего обучения',
    description: 'Наш подход позволяет начать зарабатывать на Форекс без необходимости тратить годы на изучение тонкостей анализа.',
  },
  {
    icon: Brain,
    title: 'Без эмоций',
    description: 'Наш советник автоматически открывает и сопровождает сделки, исключая влияние психологии.',
  },
  {
    icon: Focus,
    title: 'Узкая специализация',
    description: 'Мы сфокусировались на EUR/USD — самой ликвидной и предсказуемой паре.',
  },
  {
    icon: TrendingUp,
    title: 'Высокий процент успешных сделок',
    description: '92,86% успешных сделок — результат нашего опыта и профессионализма.',
  },
  {
    icon: DollarSign,
    title: 'Оптимальный депозит',
    description: 'Рекомендуемый депозит от 200 USD для стабильного наращивания капитала.',
  },
];

export function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Преимущества <span className="gradient-text">PROSSFX</span>
          </h2>
          <p className="text-xl text-muted-foreground">Почему с нами выгодно?</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-2xl p-6 hover-lift group cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
