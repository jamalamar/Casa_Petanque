import { MetadataRoute } from 'next';
import { locales } from '@/i18n.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://casapetanque.com';
  const pages = ['', '/about', '/faqs', '/contact'];
  
  const urls: MetadataRoute.Sitemap = [];
  
  // Generate URLs for each locale and page combination
  locales.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });
  
  return urls;
}