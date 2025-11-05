import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';
import { GALLERY_IMAGES } from '../../utils/constants';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  const categories = ['Todos', 'Cortes', 'Barba', 'Transformação Completa'];

  const filteredImages =
    selectedCategory === 'Todos'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="galeria" className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2 variants={itemVariants} className="section-heading">
            ANTES & DEPOIS
          </motion.h2>
          <div className="gold-divider"></div>
          <motion.p variants={itemVariants} className="section-subheading">
            Veja as transformações incríveis que realizamos
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-gold text-black shadow-premium'
                  : 'bg-surface border-2 border-primary/30 text-primary hover:border-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredImages.map((image) => (
              <GalleryItem
                key={image.id}
                image={image}
                variants={itemVariants}
                onClick={() => setLightboxImage(image)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

// Gallery Item Component
const GalleryItem = ({ image, variants, onClick }: any) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Before Image */}
        <motion.img
          src={image.before}
          alt={`${image.alt} - Antes`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: showAfter ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* After Image */}
        <motion.img
          src={image.after}
          alt={`${image.alt} - Depois`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: showAfter ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-lg mb-2">{image.category}</p>
            <p className="text-textSecondary text-sm">Clique para ampliar</p>
          </div>
        </div>

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4">
          <motion.span
            animate={{ opacity: showAfter ? 0 : 1 }}
            className="bg-surface/80 text-textPrimary px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm"
          >
            ANTES
          </motion.span>
        </div>
        <div className="absolute top-4 right-4">
          <motion.span
            animate={{ opacity: showAfter ? 1 : 0 }}
            className="bg-primary text-black px-3 py-1 rounded-full text-sm font-bold"
          >
            DEPOIS
          </motion.span>
        </div>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setShowAfter(!showAfter);
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
        >
          {showAfter ? 'VER ANTES' : 'VER DEPOIS'}
        </motion.button>
      </div>
    </motion.div>
  );
};

// Lightbox Component
const Lightbox = ({ image, onClose }: any) => {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-primary text-black p-3 rounded-full shadow-premium z-10"
        >
          <FaTimes className="text-2xl" />
        </motion.button>

        {/* Image Container */}
        <div className="glass-card overflow-hidden">
          <div className="relative aspect-video">
            {/* Before Image */}
            <motion.img
              src={image.before}
              alt={`${image.alt} - Antes`}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: showAfter ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* After Image */}
            <motion.img
              src={image.after}
              alt={`${image.alt} - Depois`}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Labels */}
            <div className="absolute top-6 left-6">
              <motion.span
                animate={{ opacity: showAfter ? 0 : 1 }}
                className="bg-surface/80 text-textPrimary px-4 py-2 rounded-full font-bold backdrop-blur-sm text-lg"
              >
                ANTES
              </motion.span>
            </div>
            <div className="absolute top-6 right-6">
              <motion.span
                animate={{ opacity: showAfter ? 1 : 0 }}
                className="bg-primary text-black px-4 py-2 rounded-full font-bold text-lg"
              >
                DEPOIS
              </motion.span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="p-6 bg-surface/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading text-gradient mb-2">{image.category}</h3>
                <p className="text-textSecondary">{image.alt}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAfter(!showAfter)}
                className="btn-primary"
              >
                {showAfter ? 'VER ANTES' : 'VER DEPOIS'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
