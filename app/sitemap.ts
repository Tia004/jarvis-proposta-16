import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.venetocase.it';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/cookie`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/termini`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3
    }
  ];
}
