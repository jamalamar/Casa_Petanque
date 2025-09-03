'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Users, Sparkles, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Home,
      title: t('features.bedrooms'),
      description: t('features.bedrooms_desc'),
    },
    {
      icon: Users,
      title: t('features.guests'),
      description: t('features.guests_desc'),
    },
    {
      icon: Sparkles,
      title: t('features.bathrooms'),
      description: t('features.bathrooms_desc'),
    },
    {
      icon: Trees,
      title: t('features.location'),
      description: t('features.location_desc'),
    },
  ];

  const images = [
    '/images/casa_petanque1.jpeg',
    '/images/casa_petanque2.jpeg',
    '/images/casa_petanque3.jpeg',
    '/images/casa_petanque4.jpeg',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home_hero.jpeg"
            alt="Casa Petanque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white minimal-container"
        >
          <h1 className="text-5xl md:text-7xl font-thin tracking-wide mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            {t('hero.subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-light tracking-wider hover:bg-gray-100 transition-all duration-300"
          >
            {t('hero.cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-[1px] h-16 bg-white/50 mx-auto" />
        </div>
      </section>

      {/* About Section - Minimal */}
      <section className="py-24 bg-white">
        <div className="minimal-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-thin mb-6 text-gray-900">
                {t('features.title')}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {t('hero.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-light text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
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
                alt="Living space"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="minimal-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-thin text-gray-900 mb-4">
              {t('features.gallery.title')}
            </h2>
            <p className="text-gray-600 font-light">
              {t('features.gallery.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
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
                src="/images/casa_petanque6.jpeg"
                alt="Petanque court"
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
              <h2 className="text-4xl font-thin mb-6 text-gray-900">
                {t('features.feature1.title')}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t('features.feature1.description')}
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {t('features.feature1.description2')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gray-900 font-light border-b border-gray-900 hover:gap-4 transition-all duration-300"
              >
                {t('hero.cta_secondary')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-24 bg-gray-900 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="minimal-container text-center"
        >
          <h2 className="text-4xl font-thin mb-6">
            {t('features.cta.title')}
          </h2>
          <p className="text-xl font-light mb-8 opacity-80 max-w-2xl mx-auto">
            {t('features.cta.subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-light tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            {t('hero.cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}