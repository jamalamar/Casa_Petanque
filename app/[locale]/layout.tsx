import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n.config';
import MinimalHeader from '@/components/MinimalHeader';
import MinimalFooter from '@/components/MinimalFooter';
import type { Metadata } from 'next';
import '../globals.css';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://casapetanque.com';

  return {
    title: t('title'),
    description: t('description'),
    manifest: '/manifest.json',
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale,
      type: 'website',
      url: baseUrl,
      siteName: 'Casa Pétanque',
      images: [
        {
          url: `${baseUrl}/images/home_hero.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Casa Pétanque - Luxury Vacation Rental in Valle de Bravo',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/images/home_hero.jpeg`],
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `/${loc}`])
      ),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: 'Casa Pétanque',
    description: 'Luxury vacation rental in Avándaro, Valle de Bravo with 4 bedrooms, 5.5 bathrooms, accommodates 16+ guests',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valle de Bravo',
      addressRegion: 'Estado de México',
      addressCountry: 'MX',
      streetAddress: 'Avándaro'
    },
    numberOfRooms: '4',
    occupancy: {
      '@type': 'QuantitativeValue',
      value: '16',
      unitText: 'guests'
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Hot Tub/Jacuzzi' },
      { '@type': 'LocationFeatureSpecification', name: 'Steam Sauna' },
      { '@type': 'LocationFeatureSpecification', name: 'Game Room' },
      { '@type': 'LocationFeatureSpecification', name: 'Pétanque Court' },
      { '@type': 'LocationFeatureSpecification', name: 'Pets Allowed' },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
      { '@type': 'LocationFeatureSpecification', name: 'Netflix/Streaming' },
      { '@type': 'LocationFeatureSpecification', name: 'BBQ Grill' },
      { '@type': 'LocationFeatureSpecification', name: 'Fire Pit' },
      { '@type': 'LocationFeatureSpecification', name: 'Parking for 8 cars' }
    ],
    petsAllowed: true,
    smokingAllowed: true
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <MinimalHeader />
          <main>
            {children}
          </main>
          <MinimalFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}