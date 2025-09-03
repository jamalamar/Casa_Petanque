'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [galleryImages, setGalleryImages] = useState<Array<{src: string, alt: string}>>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const images = [
      { src: '/images/casa_petanque1.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque2.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque3.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque4.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque5.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque6.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque7.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque8.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque9.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque10.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque11.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque12.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque13.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque14.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque15.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque16.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque17.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque18.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque19.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque20.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque21.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque22.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque23.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque24.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque25.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque26.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque27.jpeg', alt: 'Casa Petanque' },
      { src: '/images/casa_petanque28.jpeg', alt: 'Casa Petanque' },
    ];
    
    setGalleryImages(shuffleArray(images));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casa_petanque12.jpeg"
            alt="Casa Petanque Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white minimal-container"
        >
          <h1 className="text-5xl md:text-6xl font-thin tracking-wide mb-4">
            {t('title')}
          </h1>
          <p className="text-xl font-light opacity-90">
            {t('subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="minimal-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-thin text-gray-900 mb-4">
              {t('showcase.title')}
            </h2>
            <p className="text-gray-600 font-light max-w-3xl">
              {t('showcase.description')}
            </p>
          </motion.div>

          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-100 animate-pulse rounded-lg" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="minimal-container text-center"
        >
          <h3 className="text-2xl font-thin text-gray-900 mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-light tracking-wider hover:bg-gray-800 transition-colors"
          >
            {t('cta.button')}
          </a>
        </motion.div>
      </section>
    </div>
  );
}