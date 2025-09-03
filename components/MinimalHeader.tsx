'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function MinimalHeader() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if we're on the home page
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/es' || pathname === '/fr';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: t('faqs'), href: '/faqs' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    const segments = pathname.split('/');
    const currentPath = segments.length > 2 ? `/${segments.slice(2).join('/')}` : '/';
    return currentPath === href;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="minimal-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className={`text-xl font-light tracking-wider transition-colors ${
            isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
          }`}>
            CASA PÉTANQUE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-light tracking-wide transition-all duration-300 ${
                  isActive(item.href)
                    ? (isScrolled || !isHomePage) ? 'text-gray-900 border-b border-gray-900' : 'text-white border-b border-white'
                    : (isScrolled || !isHomePage) ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className={(isScrolled || !isHomePage) ? '' : 'invert'}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-sm font-light tracking-wide transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 border-l-2 border-gray-900 pl-4'
                      : 'text-gray-600 hover:text-gray-900 pl-4'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}