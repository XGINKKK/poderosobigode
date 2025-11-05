import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO, OPERATING_HOURS, MAP_LOCATION, WHATSAPP_MESSAGES } from '../../utils/constants';

const Location = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contato" className="section-container bg-surface/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full blur-3xl"></div>
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
            ONDE NOS ENCONTRAR
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Estamos localizados no coração de Balneário Camboriú
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Address */}
            <div className="glass-card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl"
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading text-gradient mb-2">Endereço</h3>
                  <p className="text-textSecondary mb-3">{BUSINESS_INFO.address}</p>
                  <motion.a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block btn-secondary text-sm"
                  >
                    Abrir no Maps
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="glass-card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl"
                >
                  <FaClock />
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading text-gradient mb-3">Horário de Funcionamento</h3>
                  <ul className="space-y-2 text-textSecondary">
                    <li className="flex items-center justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="text-primary font-bold">9h às 19h</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Sábado:</span>
                      <span className="text-primary font-bold">9h às 18h</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Domingo:</span>
                      <span className="text-textSecondary">Fechado</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-success/20 rounded-lg border border-success/30">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-success rounded-full animate-pulse"></span>
                      <span className="text-success font-bold text-sm">Aberto Agora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center text-black text-2xl"
                >
                  <FaPhone />
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading text-gradient mb-3">Contato</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-textSecondary text-sm mb-1">Telefone:</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-textPrimary font-bold hover:text-primary transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                    <motion.a
                      href={`${BUSINESS_INFO.whatsapp}${WHATSAPP_MESSAGES.footer}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full text-center inline-block animate-pulse-glow"
                    >
                      <FaWhatsapp className="inline mr-2 text-xl" />
                      Falar no WhatsApp
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div variants={mapVariants} className="glass-card p-0 overflow-hidden h-full min-h-[500px]">
            <div className="relative w-full h-full">
              <iframe
                src={MAP_LOCATION.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Localização Poderoso Bigode"
              />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 right-4 glass-card bg-background/90 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-black text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading text-gradient text-lg">Poderoso Bigode</h4>
                    <p className="text-textSecondary text-sm">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div variants={itemVariants} className="mt-12 glass-card text-center">
          <h3 className="text-2xl font-heading text-gradient mb-4">
            Estacionamento Disponível
          </h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Oferecemos facilidades de estacionamento para sua comodidade.
            Venha nos visitar e descubra por que somos a barbearia mais premiada de Balneário Camboriú!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
