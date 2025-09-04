'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Script from 'next/script';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Script 
        src="https://www.airbnb.com/embeddable/airbnb_jssdk"
        strategy="lazyOnload"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casa_petanque10.jpeg"
            alt="Contact Casa Petanque"
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

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="minimal-container">
          {/* Top Row: Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form - Top Left */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-thin mb-8 text-gray-900">{t('sections.sendMessage')}</h2>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('form.name')}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none font-light text-gray-900 placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('form.email')}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none font-light text-gray-900 placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('form.phone')}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none font-light text-gray-900 placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder={t('form.message')}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none font-light text-gray-900 placeholder-gray-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-light tracking-wider hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : t('form.submit')}
                  <Send className="w-4 h-4" />
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-800 font-light"
                  >
                    {t('form.success')}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-800 font-light"
                  >
                    {t('form.error')}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map - Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-thin mb-8 text-gray-900">{t('sections.findUs')}</h2>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30168.89587349565!2d-100.15500000000001!3d19.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd6d3c6e3b39b3%3A0x7c9f3c2c8a5a5a5a!2sAv%C3%A1ndaro%2C%20Valle%20de%20Bravo%2C%20Mexico!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Airbnb Embed and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Airbnb Embed - Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-thin mb-4 text-gray-900">{t('sections.bookStay')}</h2>
              <p className="text-sm text-gray-600 mb-6">{t('sections.bookDescription')}</p>
              <div>
                <div 
                  className="airbnb-embed-frame" 
                  data-id="22483082" 
                  data-view="home" 
                  data-hide-price="true" 
                  style={{ width: '100%', height: '300px', margin: 'auto' }}
                >
                  <a href="https://www.airbnb.com/rooms/22483082?guests=1&adults=1&s=66&source=embed_widget">
                    View On Airbnb
                  </a>
                  <a href="https://www.airbnb.com/rooms/22483082?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">
                    Valle de Bravo · ★4.83 · 4 bedrooms · 8 beds · 5.5 baths
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Information - Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-thin mb-8 text-gray-900">
                {t('info.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-light text-gray-900 mb-1">{t('info.email')}</p>
                    <p className="text-gray-600 font-light">contact@casapetanque.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-light text-gray-900 mb-1">{t('info.phone')}</p>
                    <p className="text-gray-600 font-light">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-light text-gray-900 mb-1">{t('info.address')}</p>
                    <p className="text-gray-600 font-light">
                      Valle de Bravo<br />
                      Estado de México, Mexico
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="font-light text-gray-900 mb-1">{t('info.hours')}</p>
                    <p className="text-gray-600 font-light">{t('info.hours_detail')}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-light">
                    • {t('sections.features.guardian')}<br />
                    • {t('sections.features.selfCheckin')}<br />
                    • {t('sections.features.petFriendly')}<br />
                    • {t('sections.features.longStays')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}