import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const navItems = [
  { label: 'О НАС', href: '#about' },
  { label: 'ПОЧЕМУ МЫ', href: '#advantages' },
  { label: 'НАШИ УСЛУГИ', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'СОВЕТНИК PROSSFX', href: '#advisor' },
  { label: 'КОНТАКТЫ', href: '#contacts' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        backgroundColor: 'hsl(174 100% 29%)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 150, 137, 0.3)' : 'none',
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.a
          href="https://prossfx.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={logoImage} 
            alt="PROSSFX - cообщество прибыльных успешных трейдеров" 
            className="h-10 w-auto"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-menu-foreground hover:text-menu-foreground/80 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-menu-foreground group-hover:w-3/4 transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-menu-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: 'hsl(174 100% 25%)' }}
          >
            <nav className="container mx-auto py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-menu-foreground hover:bg-menu-foreground/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
