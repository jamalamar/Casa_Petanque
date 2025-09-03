'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Home, Leaf, Star } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Heart, label: t('values.hospitality'), description: 'Welcoming every guest like family' },
    { icon: Star, label: t('values.authenticity'), description: 'True Provençal experience' },
    { icon: Home, label: t('values.quality'), description: 'Exceptional comfort & amenities' },
    { icon: Leaf, label: t('values.sustainability'), description: 'Eco-conscious hospitality' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casa_petanque7.jpeg"
            alt="Casa Petanque Interior"
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

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="minimal-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-thin mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
                <p>{t('paragraph3')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/casa_petanque8.jpeg"
                alt="Property view"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="minimal-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-thin text-gray-900 mb-4">
              {t('values.title')}
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Every detail at Casa Pétanque reflects our commitment to excellence and authentic hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-gray-600" />
                </div>
                <h3 className="font-light text-gray-900 mb-2">{value.label}</h3>
                <p className="text-sm text-gray-500 font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="minimal-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] order-2 lg:order-1"
            >
              <Image
                src="/images/casa_petanque9.jpeg"
                alt="Outdoor dining"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-thin mb-6 text-gray-900">
                The Experience
              </h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  Wake up to stunning views of Lake Valle de Bravo, enjoy your morning coffee 
                  on the terrace overlooking the mountains, and spend your days exploring the charming 
                  town and enjoying water activities on the lake.
                </p>
                <p>
                  In the evenings, gather around the pétanque court for friendly matches, 
                  followed by dinner al fresco under the stars. This is the essence of 
                  Casa Pétanque - where Mexican warmth meets European elegance.
                </p>
                <p>
                  Our property offers the perfect balance of privacy and accessibility, 
                  allowing you to retreat from the world while staying connected to the 
                  vibrant culture and natural beauty of Valle de Bravo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}