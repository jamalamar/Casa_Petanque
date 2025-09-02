import { useTranslations } from 'next-intl';
import { Heart, Home, Leaf, Star } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Heart, label: t('values.hospitality') },
    { icon: Star, label: t('values.authenticity') },
    { icon: Home, label: t('values.quality') },
    { icon: Leaf, label: t('values.sustainability') },
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{t('paragraph1')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('paragraph2')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('paragraph3')}</p>
          </div>
          <div className="relative h-96 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold text-center px-8">
                Casa Pétanque
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-800">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}