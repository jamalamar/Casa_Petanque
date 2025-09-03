'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

export default function MinimalFooter() {
  const t = useTranslations();

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.faqs'), href: '/faqs' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="minimal-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wider mb-4">CASA PÉTANQUE</h3>
            <p className="text-sm text-gray-600 font-light">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light tracking-wider mb-4 text-gray-900">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-light tracking-wider mb-4 text-gray-900">
              {t('contact.info.title')}
            </h4>
            <div className="space-y-2 text-sm text-gray-600 font-light">
              <p>contact@casapetanque.com</p>
              <p>+52 55 1234 5678</p>
              <p className="pt-2">Valle de Bravo</p>
              <p>Estado de México, Mexico</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 font-light">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-1 mt-4 md:mt-0 text-xs font-light">
            <span className="text-gray-500">Made with</span>
            <Heart className="w-3 h-3 text-purple-600 fill-purple-600" />
            <span className="text-gray-500">by</span>
            <a 
              href="https://digihoriz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              DigiHoriz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}