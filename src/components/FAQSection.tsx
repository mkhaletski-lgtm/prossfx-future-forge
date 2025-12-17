import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: 'Какой у вас опыт в торговле на Форекс?',
    answer: 'Мы торгуем на реальных счетах с 2006 года. За это время мы успешно прошли кризисы 2008 и 2010 годов, сохранив и приумножив капитал наших клиентов.'
  },
  {
    question: 'Почему я должен вам доверять?',
    answer: 'Наш опыт более 19 лет на реальных счетах, 92.86% успешных сделок и прозрачная история торговли говорят сами за себя. Мы не обещаем золотые горы, но показываем реальные результаты.'
  },
  {
    question: 'Даёте ли вы гарантии, что я заработаю на ваших сигналах?',
    answer: 'Торговля на Форекс всегда связана с риском, и никто не может гарантировать 100% прибыль. Однако наша статистика (92.86% успешных сделок) демонстрирует высокую эффективность нашей стратегии.'
  },
  {
    question: 'В какой период времени вы публикуете торговые сигналы?',
    answer: 'Сигналы публикуются в рабочее время с 09:00 до 22:00 по московскому времени, когда рынок наиболее активен.'
  },
  {
    question: 'Сколько торговых сигналов будет публиковаться в месяц?',
    answer: 'В среднем мы публикуем от 2 до 5 сигналов в месяц. Мы не гонимся за количеством — главное качество и точность входа.'
  },
  {
    question: 'Сколько времени мне придётся уделять в день при торговле по вашим сигналам?',
    answer: 'Минимум времени! Получив сигнал, вам нужно лишь открыть сделку по указанным параметрам. Это занимает несколько минут.'
  },
  {
    question: 'Обучаете ли вы техническому или фундаментальному анализу?',
    answer: 'Наша цель — дать вам готовые инструменты для заработка без необходимости глубокого погружения в теорию. Однако мы всегда объясняем логику наших сигналов.'
  },
  {
    question: 'Сколько я заработаю на одной сделке по вашим сигналам?',
    answer: 'Прибыль от одной сделки составляет от 20 до 300 пунктов в зависимости от рыночной ситуации и параметров сигнала.'
  },
  {
    question: 'С каким минимальным депозитом можно торговать по вашей торговой системе?',
    answer: 'Рекомендуемый минимальный депозит — 200 USD. Это позволяет комфортно работать с нашими сигналами и управлять рисками.'
  },
  {
    question: 'По какой валютной паре вы даёте торговые сигналы?',
    answer: 'Мы специализируемся исключительно на паре EUR/USD — самой ликвидной и предсказуемой валютной паре на рынке Форекс.'
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Готовые торговые сигналы <span className="gradient-text">PROSSFX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Бесплатные торговые сигналы публикуются в телеграм канале в рабочее время (09:00–22:00 МСК) по паре EUR/USD. Не нужно учиться теханализу или следить за новостями — достаточно открыть сделку по сигналу
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="telegram" size="xl" asChild>
            <a href="https://t.me/PROSSFX" target="_blank" rel="noopener noreferrer">
              ПОДПИСАТЬСЯ НА БЕСПЛАТНЫЕ СИГНАЛЫ В ТЕЛЕГРАМ
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
