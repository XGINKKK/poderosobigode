import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialProof from './components/SocialProof/SocialProof';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Gallery from './components/Gallery/Gallery';
import Differentials from './components/Differentials/Differentials';
import Testimonials from './components/Testimonials/Testimonials';
import Location from './components/Location/Location';
import CTAFinal from './components/CTAFinal/CTAFinal';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { BUSINESS_INFO } from './utils/constants';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Poderoso Bigode - Barbearia Premium em Balneário Camboriú | Transforme Sua Autoestima</title>
          <meta
            name="description"
            content="Transforme sua autoestima em poder! 10 anos de experiência, +67mil cortes realizados. Barbearia e Tattoo premium em Balneário Camboriú. Agende agora!"
          />
          <meta
            name="keywords"
            content="barbearia, barbershop, balneário camboriú, tattoo, corte masculino, barba, bigode, barbearia premium, cortes modernos, tatuagem, transformação visual, autoestima"
          />
          <meta name="author" content="Poderoso Bigode" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://poderosobigode.com.br" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://poderosobigode.com.br" />
          <meta
            property="og:title"
            content="Poderoso Bigode - Barbearia Premium em Balneário Camboriú"
          />
          <meta
            property="og:description"
            content="Transforme sua autoestima em poder! 10 anos, +67mil cortes. Barbearia e Tattoo premium."
          />
          <meta
            property="og:image"
            content="https://poderosobigode.com.br/og-image.jpg"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://poderosobigode.com.br" />
          <meta
            property="twitter:title"
            content="Poderoso Bigode - Barbearia Premium"
          />
          <meta
            property="twitter:description"
            content="Transforme sua autoestima em poder! Barbearia premium em Balneário Camboriú."
          />
          <meta
            property="twitter:image"
            content="https://poderosobigode.com.br/og-image.jpg"
          />

          {/* Additional Meta Tags */}
          <meta name="theme-color" content="#D4AF37" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Language" content="pt-BR" />

          {/* Structured Data - Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BarberShop',
              name: BUSINESS_INFO.name,
              image: 'https://poderosobigode.com.br/logo.png',
              '@id': 'https://poderosobigode.com.br',
              url: 'https://poderosobigode.com.br',
              telephone: BUSINESS_INFO.phone,
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua 901 N 150',
                addressLocality: 'Balneário Camboriú',
                addressRegion: 'SC',
                postalCode: '',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -26.9906,
                longitude: -48.6356,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                BUSINESS_INFO.instagramUrl,
                'https://facebook.com/poderosobigode',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '2700',
              },
            })}
          </script>
        </Helmet>

        {/* Main Content */}
        <Header />

        <main>
          <Hero />
          <SocialProof />
          <Services />
          <Process />
          <Gallery />
          <Differentials />
          <Testimonials />
          <Location />
          <CTAFinal />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}

export default App;
