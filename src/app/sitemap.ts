import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap { return ['/', '/products', '/engineering', '/labs', '/work', '/about', '/contact', ...products.map((p) => `/products/${p.slug}`)].map((path) => ({ url: `https://knoux.store${path}`, changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7 })); }
