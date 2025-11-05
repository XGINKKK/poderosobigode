import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DIFFERENTIALS } from '../../utils/constants';

const Differentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="section-container bg-surface/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="section-heading">
            NOSSOS DIFERENCIAIS
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            O que nos torna únicos e especiais
          </motion.p>
        </div>

        {/* Differentials Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {DIFFERENTIALS.map((differential, index) => (
            <DifferentialCard
              key={differential.id}
              differential={differential}
              variants={itemVariants}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="glass-card max-w-4xl mx-auto p-8 text-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl mb-6 inline-block"
            >
              👑
            </motion.div>
            <h3 className="text-3xl font-heading text-gradient mb-4">
              Experiência Premium Completa
            </h3>
            <p className="text-textSecondary text-lg leading-relaxed">
              Não somos apenas uma barbearia. Somos especialistas em transformação pessoal,
              combinando técnica apurada, produtos premium e atendimento excepcional para
              proporcionar uma experiência única e inesquecível.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Differential Card Component
const DifferentialCard = ({ differential, variants, index }: any) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card group relative overflow-hidden"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      {/* Icon with Animation */}
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{ duration: 0.6 }}
        className="text-6xl mb-6 inline-block relative"
      >
        {differential.icon}

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Number Badge */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-heading text-primary">
        {differential.id}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-heading text-gradient mb-4 group-hover:scale-105 transition-transform duration-300">
        {differential.title}
      </h3>

      {/* Description */}
      <p className="text-textSecondary leading-relaxed">
        {differential.description}
      </p>

      {/* Hover Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Decoration */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-500"></div>
    </motion.div>
  );
};

export default Differentials;
