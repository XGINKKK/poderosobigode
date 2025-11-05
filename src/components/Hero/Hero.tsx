import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { BUSINESS_INFO, MESSAGES, STATS, WHATSAPP_MESSAGES } from '../../utils/constants';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 section-container text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="glass-card inline-flex items-center space-x-2 px-6 py-3">
            <span className="w-3 h-3 bg-success rounded-full animate-pulse"></span>
            <span className="text-textSecondary font-medium">
              Aberto agora • Agende seu horário
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight"
        >
          <span className="text-gradient block">
            {MESSAGES.hero.title.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="text-textPrimary block">
            {MESSAGES.hero.title.split(' ').slice(3).join(' ')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-textSecondary mb-8 max-w-3xl mx-auto"
        >
          {MESSAGES.hero.subtitle}
        </motion.p>

        {/* Statistics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-12"
        >
          <div className="glass-card">
            <div className="text-3xl md:text-5xl font-heading text-gradient mb-2">
              {STATS.yearsExperience}+
            </div>
            <div className="text-sm md:text-base text-textSecondary">Anos</div>
          </div>
          <div className="glass-card">
            <div className="text-3xl md:text-5xl font-heading text-gradient mb-2">
              {(STATS.totalCuts / 1000).toFixed(0)}K+
            </div>
            <div className="text-sm md:text-base text-textSecondary">Cortes</div>
          </div>
          <div className="glass-card">
            <div className="text-3xl md:text-5xl font-heading text-gradient mb-2">
              {(STATS.totalClients / 1000).toFixed(1)}K+
            </div>
            <div className="text-sm md:text-base text-textSecondary">Clientes</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.hero}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full sm:w-auto animate-pulse-glow"
          >
            <FaWhatsapp className="inline mr-3 text-2xl" />
            {MESSAGES.hero.ctaPrimary}
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('#servicos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary w-full sm:w-auto"
          >
            {MESSAGES.hero.ctaSecondary}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-20 cursor-pointer"
          onClick={() => scrollToSection('#sobre')}
        >
          <FaArrowDown className="text-primary text-3xl mx-auto opacity-70 hover:opacity-100 transition-opacity" />
          <p className="text-textSecondary text-sm mt-2">Role para descobrir</p>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
