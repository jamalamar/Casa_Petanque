'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQsPage() {
  const t = useTranslations('faqs');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('questions.q1.question'),
      answer: t('questions.q1.answer'),
    },
    {
      question: t('questions.q2.question'),
      answer: t('questions.q2.answer'),
    },
    {
      question: t('questions.q3.question'),
      answer: t('questions.q3.answer'),
    },
    {
      question: t('questions.q4.question'),
      answer: t('questions.q4.answer'),
    },
    {
      question: t('questions.q5.question'),
      answer: t('questions.q5.answer'),
    },
    {
      question: t('questions.q6.question'),
      answer: t('questions.q6.answer'),
    },
    {
      question: t('questions.q7.question'),
      answer: t('questions.q7.answer'),
    },
    {
      question: t('questions.q8.question'),
      answer: t('questions.q8.answer'),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casa_petanque11.jpeg"
            alt="Casa Petanque FAQs"
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="minimal-container max-w-3xl">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-light text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="text-2xl font-thin text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 font-light mb-8">
              We're here to help. Feel free to reach out to us anytime.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}