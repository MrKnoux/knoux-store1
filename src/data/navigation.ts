import { products } from '@/data/products';

export const navigation = [
  { label: 'Products', href: '/products' },
  { label: 'Labs', href: '/labs' },
  { label: 'Work', href: '/work' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const searchable = [
  { label: 'Home', description: 'KNOuX Digital Headquarters', href: '/' },
  ...navigation.map((item) => ({ label: item.label, description: 'Explore KNOuX', href: item.href })),
  ...products.map((product) => ({
    label: product.name,
    description: `${product.discipline.toUpperCase()} • ${product.tagline} • ${product.keywords.slice(0, 5).join(' ')}`,
    href: `/products/${product.slug}`,
  })),
];
