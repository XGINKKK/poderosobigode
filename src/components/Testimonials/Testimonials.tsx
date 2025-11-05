import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { TESTIMONIALS } from '../../utils/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
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
    <section className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            O QUE NOSSOS CLIENTES DIZEM
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Depoimentos reais de clientes que transformaram sua autoestima
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-16"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card text-center">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-primary text-2xl" />
              ))}
            </div>
            <div className="text-3xl font-heading text-gradient mb-2">5.0</div>
            <p className="text-textSecondary">Avaliação Média</p>
          </div>

          <div className="glass-card text-center">
            <div className="text-5xl mb-3">⭐</div>
            <div className="text-3xl font-heading text-gradient mb-2">2,700+</div>
            <p className="text-textSecondary">Avaliações Positivas</p>
          </div>

          <div className="glass-card text-center">
            <div className="text-5xl mb-3">🏆</div>
            <div className="text-3xl font-heading text-gradient mb-2">100%</div>
            <p className="text-textSecondary">Satisfação Garantida</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: any) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card h-full flex flex-col relative group"
    >
      {/* Quote Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 180 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 text-primary/20 text-4xl"
      >
        <FaQuoteLeft />
      </motion.div>

      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <FaStar className="text-primary text-xl" />
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <p className="text-textSecondary leading-relaxed mb-6 flex-grow italic">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4 border-t border-primary/20 pt-4">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary"
          />
          {testimonial.verified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-1 -right-1 bg-success rounded-full p-1"
            >
              <FaCheckCircle className="text-white text-xs" />
            </motion.div>
          )}
        </motion.div>

        {/* Name and Role */}
        <div className="flex-grow">
          <h4 className="text-textPrimary font-bold">{testimonial.name}</h4>
          <p className="text-textSecondary text-sm">{testimonial.role}</p>
        </div>

        {/* Verified Badge */}
        {testimonial.verified && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-success/20 text-success px-3 py-1 rounded-full text-xs font-bold"
          >
            Verificado
          </motion.div>
        )}
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
    </motion.div>
  );
};

export default Testimonials;
