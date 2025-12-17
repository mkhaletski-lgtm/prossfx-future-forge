import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ShatterTextProps {
  text: string;
  className?: string;
  highlightWord?: string;
}

export function ShatterText({ text, className, highlightWord }: ShatterTextProps) {
  const [isAssembled, setIsAssembled] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(' ');
  
  return (
    <h1 className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.3em]">
          {word.split('').map((char, charIndex) => {
            const isHighlight = highlightWord && word.includes(highlightWord);
            const randomX = (Math.random() - 0.5) * 600;
            const randomY = (Math.random() - 0.5) * 400;
            const randomRotate = (Math.random() - 0.5) * 180;
            const delay = wordIndex * 0.05 + charIndex * 0.02;
            
            return (
              <motion.span
                key={charIndex}
                initial={{
                  x: randomX,
                  y: randomY,
                  rotate: randomRotate,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={isAssembled ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className={`inline-block ${isHighlight ? 'gradient-text' : ''}`}
                style={{
                  textShadow: isAssembled ? '0 0 30px rgba(0, 191, 166, 0.5)' : 'none',
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

interface FloatingContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingContainer({ children, className }: FloatingContainerProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
