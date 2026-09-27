import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/products',
    '/wordpress',
    '/wordpress/themes',
    '/wordpress/plugins',
    '/wordpress/blocks',
    '/wordpress/starter-sites',
    '/wordpress/solutions',
    '/web',
    '/growth',
    '/growth/meta-ads',
    '/growth/google-ads',
    '/growth/social',
    '/growth/content',
    '/growth/seo',
    '/creative',
    '/solutions',
    '/build',
    '/labs',
    '/engineering',
    '/work',
    '/about',
    '/contact',
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `https://knoux.store${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/products/') ? 0.8 : 0.7,
  }));
}
