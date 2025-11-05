import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../../utils/constants';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip automatically after button appears
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-20 right-0 mb-2 whitespace-nowrap"
              >
                <div className="glass-card bg-surface/95 backdrop-blur-xl px-6 py-4 shadow-premium relative">
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-xs"
                  >
                    <FaTimes />
                  </motion.button>

                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">👋</div>
                    <div>
                      <p className="text-textPrimary font-bold mb-1">
                        Olá! Podemos ajudar?
                      </p>
                      <p className="text-textSecondary text-sm">
                        Agende seu horário agora!
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-surface/95 backdrop-blur-xl transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.a
            href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.float}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => {
              // Don't hide immediately on hover end
              setTimeout(() => setShowTooltip(false), 2000);
            }}
            className="relative w-16 h-16 md:w-20 md:h-20 bg-success rounded-full flex items-center justify-center shadow-premium hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300 group"
          >
            {/* Pulsating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-success"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              <FaWhatsapp className="text-white text-3xl md:text-4xl" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="text-black font-bold text-xs"
              >
                1
              </motion.span>
            </motion.div>
          </motion.a>

          {/* Label Below Button (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:hidden text-center mt-2"
          >
            <span className="text-textSecondary text-xs font-bold">
              Fale Conosco
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
