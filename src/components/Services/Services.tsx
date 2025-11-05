import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import { SERVICES, BUSINESS_INFO, WHATSAPP_MESSAGES } from '../../utils/constants';

const Services = () => {
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
    <section id="servicos" className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow"></div>
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
            NOSSOS SERVIÇOS PREMIUM
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Serviços completos para a sua transformação total
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="glass-card max-w-4xl mx-auto p-8">
            <h3 className="text-2xl md:text-3xl font-heading text-gradient mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-textSecondary text-lg mb-6">
              Entre em contato e criaremos um plano personalizado para você!
            </p>
            <motion.a
              href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.footer}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Falar com Especialista
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, variants }: { service: any; variants: any }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10 }}
      className="glass-card group relative overflow-hidden h-full"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="text-6xl mb-6 inline-block"
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-heading text-gradient mb-4 group-hover:scale-105 transition-transform duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-textSecondary mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {service.features.map((feature: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start text-textSecondary"
          >
            <FaCheck className="text-primary mr-3 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.a
        href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.service(service.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-secondary w-full text-center inline-block mt-auto"
      >
        <FaWhatsapp className="inline mr-2" />
        Agendar Serviço
      </motion.a>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default Services;
