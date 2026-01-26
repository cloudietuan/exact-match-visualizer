import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email'),
  salon: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const LiveContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    salon: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (field: keyof FormData, value: string) => {
    try {
      const fieldSchema = contactSchema.shape[field];
      fieldSchema.parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field] || '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', salon: '', message: '' });
      setTouched({});
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: keyof FormData) => `
    w-full px-4 py-3 bg-transparent border rounded-lg transition-all duration-300 outline-none
    ${errors[field] && touched[field]
      ? 'border-red-400 focus:border-red-400' 
      : 'border-lumina-ink/20 focus:border-lumina-terracotta'
    }
    ${touched[field] && !errors[field] && formData[field] 
      ? 'border-green-400' 
      : ''
    }
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name field */}
      <div className="relative">
        <motion.input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={inputClasses('name')}
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {errors.name && touched.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
        {touched.name && !errors.name && formData.name && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400"
          >
            ✓
          </motion.span>
        )}
      </div>

      {/* Email field */}
      <div className="relative">
        <motion.input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={inputClasses('email')}
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {errors.email && touched.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
        {touched.email && !errors.email && formData.email && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400"
          >
            ✓
          </motion.span>
        )}
      </div>

      {/* Salon field */}
      <div className="relative">
        <motion.input
          type="text"
          placeholder="Salon name (optional)"
          value={formData.salon}
          onChange={(e) => handleChange('salon', e.target.value)}
          className="w-full px-4 py-3 bg-transparent border border-lumina-ink/20 rounded-lg focus:border-lumina-terracotta transition-colors outline-none"
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      {/* Message field */}
      <div className="relative">
        <motion.textarea
          placeholder="Tell us about your project..."
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          className={inputClasses('message') + ' resize-none'}
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {errors.message && touched.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
        <span className="absolute right-3 bottom-3 text-lumina-ink-subtle text-xs">
          {formData.message.length}/1000
        </span>
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-lumina-terracotta text-white font-medium rounded-lg relative overflow-hidden disabled:opacity-70"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <motion.span
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Sending...
            </motion.span>
          ) : isSuccess ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              ✓ Message Sent!
            </motion.span>
          ) : (
            <motion.span
              key="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
};

export default LiveContactForm;
