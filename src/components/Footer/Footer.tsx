import { motion } from 'framer-motion';
import { FaCrown, FaInstagram, FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import { BUSINESS_INFO, NAV_LINKS, OPERATING_HOURS, SOCIAL_MEDIA } from '../../utils/constants';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <FaInstagram />;
      case 'whatsapp':
        return <FaWhatsapp />;
      case 'facebook':
        return <FaFacebook />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-surface/50 backdrop-blur-xl border-t border-primary/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Column 1 - Brand */}
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <FaCrown className="text-primary text-4xl animate-pulse-slow" />
                <div>
                  <h3 className="text-2xl font-heading text-gradient">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-textSecondary">Transforme sua autoestima</p>
                </div>
              </motion.div>
              <p className="text-textSecondary leading-relaxed mb-6">
                Há mais de 10 anos transformando vidas através do cuidado pessoal.
                Mais que uma barbearia, somos especialistas em elevar sua autoestima
                e confiança.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {SOCIAL_MEDIA.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-black text-xl hover:shadow-premium transition-shadow"
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2 - Links Rápidos */}
            <div>
              <h4 className="text-xl font-heading text-gradient mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      whileHover={{ x: 5 }}
                      className="text-textSecondary hover:text-primary transition-colors flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{link.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contato */}
            <div>
              <h4 className="text-xl font-heading text-gradient mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-textSecondary">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </li>
                <li className="flex items-start space-x-3 text-textSecondary">
                  <FaPhone className="text-primary mt-1 flex-shrink-0" />
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-textSecondary">
                  <FaWhatsapp className="text-primary mt-1 flex-shrink-0" />
                  <a
                    href={BUSINESS_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-textSecondary">
                  <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Horários */}
            <div>
              <h4 className="text-xl font-heading text-gradient mb-6">Horários</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <FaClock className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-textSecondary">
                    <p className="font-bold text-textPrimary mb-1">Segunda a Sexta</p>
                    <p>9h às 19h</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaClock className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-textSecondary">
                    <p className="font-bold text-textPrimary mb-1">Sábado</p>
                    <p>9h às 18h</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaClock className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-textSecondary">
                    <p className="font-bold text-textPrimary mb-1">Domingo</p>
                    <p>Fechado</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4 p-3 glass-card">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-success rounded-full animate-pulse"></span>
                  <span className="text-success font-bold text-sm">Aberto Agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-textSecondary text-sm text-center md:text-left">
                <p>
                  © {currentYear} <span className="text-primary font-bold">{BUSINESS_INFO.name}</span>.
                  Todos os direitos reservados.
                </p>
              </div>

              {/* Developed By */}
              <div className="text-textSecondary text-sm text-center md:text-right">
                <p className="flex items-center justify-center md:justify-end space-x-1">
                  <span>Desenvolvido com</span>
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <FaHeart className="text-primary inline" />
                  </motion.span>
                  <span>para transformar vidas</span>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-textSecondary text-sm">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary transition-colors"
                >
                  Termos de Uso
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
