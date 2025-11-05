import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaTrophy, FaCut, FaUsers, FaStar } from 'react-icons/fa';

interface Badge {
  id: number;
  icon: React.ReactNode;
  title: string;
  value: number;
  suffix: string;
  description: string;
}

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const badges: Badge[] = [
    {
      id: 1,
      icon: <FaTrophy className="text-5xl text-primary" />,
      title: "Anos de Excelência",
      value: 10,
      suffix: "+",
      description: "Década de experiência",
    },
    {
      id: 2,
      icon: <FaCut className="text-5xl text-primary" />,
      title: "Cortes Realizados",
      value: 67000,
      suffix: "+",
      description: "Transformações completas",
    },
    {
      id: 3,
      icon: <FaUsers className="text-5xl text-primary" />,
      title: "Clientes Satisfeitos",
      value: 2700,
      suffix: "+",
      description: "Confiança conquistada",
    },
    {
      id: 4,
      icon: <FaStar className="text-5xl text-primary" />,
      title: "Avaliação Média",
      value: 5,
      suffix: ".0",
      description: "Excelência reconhecida",
    },
  ];

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

  return (
    <section id="sobre" className="section-container bg-surface/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            POR QUE SOMOS OS MELHORES
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Números que comprovam nossa excelência e compromisso com a qualidade
          </motion.p>
        </div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} inView={inView} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="glass-card max-w-4xl mx-auto p-8">
            <h3 className="text-2xl md:text-3xl font-heading text-gradient mb-4">
              Especialistas em Transformação
            </h3>
            <p className="text-textSecondary text-lg leading-relaxed">
              Nossa missão é muito mais que cortar cabelo ou fazer barba. Transformamos autoestima,
              renovamos confiança e fazemos você se sentir poderoso. Cada cliente é único e merece
              um atendimento excepcional.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Counter Component with Animation
const BadgeCard = ({
  badge,
  inView,
  variants,
}: {
  badge: Badge;
  inView: boolean;
  variants: any;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * badge.value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, badge.value]);

  return (
    <motion.div variants={variants} className="glass-card text-center group hover:scale-105 transition-transform duration-300">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block"
      >
        {badge.icon}
      </motion.div>
      <div className="text-4xl md:text-5xl font-heading text-gradient mb-2">
        {count.toLocaleString('pt-BR')}
        {badge.suffix}
      </div>
      <h3 className="text-xl font-bold text-textPrimary mb-2">{badge.title}</h3>
      <p className="text-textSecondary">{badge.description}</p>
    </motion.div>
  );
};

export default SocialProof;
