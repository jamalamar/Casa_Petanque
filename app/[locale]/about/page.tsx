'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Home, Leaf, Star } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Heart, label: t('values.hospitality'), description: t('values.hospitality_desc') },
    { icon: Star, label: t('values.authenticity'), description: t('values.authenticity_desc') },
    { icon: Home, label: t('values.quality'), description: t('values.quality_desc') },
    { icon: Leaf, label: t('values.sustainability'), description: t('values.sustainability_desc') },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casa_petanque1.jpeg"
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
              <h2 className="text-3xl font-thin mb-6 text-gray-900">{t('story.title')}</h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
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
                src="/images/casa_petanque5.jpeg"
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
              {t('values.subtitle')}
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
                src="/images/casa_petanque24.jpeg"
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
                {t('experience.title')}
              </h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>{t('experience.paragraph1')}</p>
                <p>{t('experience.paragraph2')}</p>
                <p>{t('experience.paragraph3')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}