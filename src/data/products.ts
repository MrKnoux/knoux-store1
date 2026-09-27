export type ProductStatus = 'active' | 'in-development' | 'undisclosed';
export type Product = {
  id: string;
  slug: string;
  name: string;
  index: string;
  discipline: 'Systems' | 'Development' | 'Utilities' | 'Organization';
  statement: string;
  status?: ProductStatus;
  platforms?: string[];
  capabilities?: string[];
  technologies?: string[];
  screenshots?: string[];
  heroAsset?: string;
  liveUrl?: string;
  downloadUrl?: string;
  repositoryUrl?: string;
  documentationUrl?: string;
  relatedProducts?: string[];
};

export const products: readonly Product[] = [
  { id: 'one', slug: 'knoux-one', name: 'KNOuX ONE', index: '01', discipline: 'Systems', statement: 'A KNOuX product. Its public technical dossier is in preparation.' },
  { id: 'forge', slug: 'kforge', name: 'KNOuX Forge', index: '02', discipline: 'Development', statement: 'A KNOuX product. Its public technical dossier is in preparation.' },
  { id: 'repair', slug: 'knoux-repair', name: 'KNOuX Repair', index: '03', discipline: 'Utilities', statement: 'A KNOuX product. Its public technical dossier is in preparation.' },
  { id: 'organizer', slug: 'smart-organizer', name: 'KNOuX SmartOrganizer', index: '04', discipline: 'Organization', statement: 'A KNOuX product. Its public technical dossier is in preparation.' },
] as const;

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
