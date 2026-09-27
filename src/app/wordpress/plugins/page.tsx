import { WordPressCategoryPage } from '@/components/WordPressCatalog';
import { pageMetadata } from '@/lib/metadata';
import type { WordPressCategory } from '@/data/wordpress';

export const metadata = pageMetadata('Plugins', 'KNOuX WordPress plugins and extensions, listed as a technical registry. No release published yet.', '/wordpress/plugins');

export default function Page() {
  return <WordPressCategoryPage category={'plugins' as WordPressCategory} />;
}
