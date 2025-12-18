import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

interface EmailFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailFormModal({ isOpen, onClose }: EmailFormModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/prossfx@prossfx.ru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: 'Запрос на получение советника PROSSFX',
          _template: 'table'
        })
      });

      if (response.ok) {
        toast.success('Заявка отправлена! Советник будет отправлен на ваш email.');
        setName('');
        setEmail('');
        onClose();
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast.error('Произошла ошибка. Попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal - centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-strong rounded-3xl p-8 w-full max-w-md relative overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    Получить советника
                  </h3>
                  <p className="text-muted-foreground">
                    Заполните форму и получите советника PROSSFX бесплатно на ваш email
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12 h-12 bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Получить советника
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
