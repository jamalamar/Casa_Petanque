'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';

export default function GalleryPage() {
  const t = useTranslations();

  const galleryImages = [
    {
      src: '/images/casa_petanque13.jpeg',
      alt: 'Casa Petanque Exterior',
      caption: 'Main entrance and garden view'
    },
    {
      src: '/images/casa_petanque14.jpeg',
      alt: 'Living Room',
      caption: 'Spacious living area with modern furnishings'
    },
    {
      src: '/images/casa_petanque15.jpeg',
      alt: 'Kitchen and Dining',
      caption: 'Fully equipped kitchen and dining space'
    },
    {
      src: '/images/casa_petanque16.jpeg',
      alt: 'Master Bedroom',
      caption: 'Master bedroom with garden views'
    },
    {
      src: '/images/casa_petanque17.jpeg',
      alt: 'Pétanque Court',
      caption: 'Professional-grade pétanque court'
    },
    {
      src: '/images/casa_petanque18.jpeg',
      alt: 'Pool Area',
      caption: 'Private pool with sun loungers'
    },
    {
      src: '/images/casa_petanque19.jpeg',
      alt: 'Outdoor Terrace',
      caption: 'Al fresco dining area'
    },
    {
      src: '/images/casa_petanque20.jpeg',
      alt: 'Garden Path',
      caption: 'Beautiful garden pathways'
    },
    {
      src: '/images/casa_petanque21.jpeg',
      alt: 'Evening View',
      caption: 'Casa Pétanque at sunset'
    },
    {
      src: '/images/casa_petanque22.jpeg',
      alt: 'Bedroom 2',
      caption: 'Comfortable guest bedroom'
    },
    {
      src: '/images/casa_petanque23.jpeg',
      alt: 'Bedroom 3',
      caption: 'Bright and airy bedroom'
    },
    {
      src: '/images/casa_petanque24.jpeg',
      alt: 'Bathroom',
      caption: 'Modern bathroom with luxury fixtures'
    },
    {
      src: '/images/casa_petanque25.jpeg',
      alt: 'Lake View',
      caption: 'Stunning views of Valle de Bravo lake'
    },
    {
      src: '/images/casa_petanque26.jpeg',
      alt: 'Mountain View',
      caption: 'Breathtaking mountain scenery'
    },
  ];

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
            Gallery
          </h1>
          <p className="text-xl font-light opacity-90">
            Explore every corner of Casa Pétanque
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
              Property Showcase
            </h2>
            <p className="text-gray-600 font-light max-w-3xl">
              Click on any image to view it in full size. Use arrow keys or swipe to navigate through the gallery.
            </p>
          </motion.div>

          <ImageGallery images={galleryImages} />
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
            Ready to experience it in person?
          </h3>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Nothing compares to experiencing Casa Pétanque firsthand. Book your stay and create unforgettable memories.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-light tracking-wider hover:bg-gray-800 transition-colors"
          >
            Book Your Stay
          </a>
        </motion.div>
      </section>
    </div>
  );
}