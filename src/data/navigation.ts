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
  { label: 'KNOuX ONE', description: 'Product', href: '/products/knoux-one' },
  { label: 'KNOuX Forge', description: 'Product', href: '/products/kforge' },
  { label: 'KNOuX Repair', description: 'Product', href: '/products/knoux-repair' },
  { label: 'KNOuX SmartOrganizer', description: 'Product', href: '/products/smart-organizer' },
] as const;
