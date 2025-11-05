import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROCESS_STEPS } from '../../utils/constants';

const Process = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <section className="section-container bg-surface/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-gold blur-sm"></div>
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
            SUA TRANSFORMAÇÃO EM 5 PASSOS
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Um processo simples e eficiente para sua melhor experiência
          </motion.p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Animated Line */}
          <motion.div
            variants={lineVariants}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-gold transform -translate-y-1/2 origin-left"
            style={{ top: '80px' }}
          />

          {/* Steps */}
          <div className="grid grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card text-center group hover:scale-105 transition-transform duration-300">
                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center font-heading text-2xl text-black shadow-premium"
                  >
                    {step.id}
                  </motion.div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 mt-8">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-heading text-gradient mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textSecondary text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last item) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="absolute top-[80px] -right-4 text-primary text-3xl z-20"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Connecting Line */}
              {index < PROCESS_STEPS.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="absolute left-6 top-full w-1 h-8 bg-gradient-gold origin-top"
                />
              )}

              {/* Step Card */}
              <div className="flex items-start space-x-4">
                {/* Number Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center font-heading text-2xl text-black shadow-premium"
                >
                  {step.id}
                </motion.div>

                {/* Content */}
                <div className="glass-card flex-1">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-heading text-gradient mb-2">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-xl text-textSecondary mb-2">
            Pronto para começar sua jornada?
          </p>
          <p className="text-3xl font-heading text-gradient">
            Agende agora e descubra o poder da transformação!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Process;
