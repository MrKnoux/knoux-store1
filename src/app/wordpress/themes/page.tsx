import { WordPressCategoryPage } from '@/components/WordPressCatalog';
import { pageMetadata } from '@/lib/metadata';
import type { WordPressCategory } from '@/data/wordpress';

export const metadata = pageMetadata('Themes', 'Full site editing themes from the KNOuX WordPress ecosystem. Catalogue structure, filters and detail surface in place; no release published yet.', '/wordpress/themes');

export default function Page() {
  return <WordPressCategoryPage category={'themes' as WordPressCategory} />;
}
