import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaCreditCard, FaMoneyBillWave, FaQrcode } from 'react-icons/fa';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../../utils/constants';

const CTAFinal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="glass-card inline-flex items-center space-x-3 px-6 py-3 animate-pulse-glow">
            <span className="text-3xl">🔥</span>
            <span className="text-primary font-bold text-lg">Primeira Visita? Ganhe 10% OFF</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 leading-tight"
        >
          <span className="text-gradient block mb-2">
            PRONTO PARA SUA
          </span>
          <span className="text-textPrimary block">
            TRANSFORMAÇÃO?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-textSecondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Agende agora e descubra o poder de um visual impecável.
          <br />
          <span className="text-primary font-bold">
            Sua autoestima merece o melhor!
          </span>
        </motion.p>

        {/* Main CTA Button */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.a
            href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.hero}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-gold text-black font-bold py-6 px-12 rounded-full text-xl md:text-2xl shadow-premium hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] transition-all duration-300 animate-pulse-glow"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <FaWhatsapp className="text-3xl" />
            </motion.div>
            <span>FALAR NO WHATSAPP AGORA</span>
          </motion.a>
        </motion.div>

        {/* Payment Methods */}
        <motion.div variants={itemVariants} className="glass-card max-w-2xl mx-auto p-8">
          <h3 className="text-xl font-heading text-gradient mb-6">
            Formas de Pagamento Aceitas
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl">
                <FaCreditCard />
              </div>
              <span className="text-textSecondary text-sm font-bold">Cartão</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl">
                <FaQrcode />
              </div>
              <span className="text-textSecondary text-sm font-bold">PIX</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl">
                <FaMoneyBillWave />
              </div>
              <span className="text-textSecondary text-sm font-bold">Dinheiro</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-6 text-textSecondary"
        >
          <div className="flex items-center space-x-2">
            <span className="text-success text-xl">✓</span>
            <span>Atendimento Imediato</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success text-xl">✓</span>
            <span>Profissionais Experientes</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success text-xl">✓</span>
            <span>Satisfação Garantida</span>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-textSecondary text-sm">
            💈 Mais de <span className="text-primary font-bold">67 mil clientes</span> transformados em 10 anos 💈
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTAFinal;
