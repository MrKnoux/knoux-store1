import { WordPressCategoryPage } from '@/components/WordPressCatalog';
import { pageMetadata } from '@/lib/metadata';
import type { WordPressCategory } from '@/data/wordpress';

export const metadata = pageMetadata('Blocks', 'KNOuX Gutenberg block library. Registry surface, capability tags and keyboard navigation in place; no block published yet.', '/wordpress/blocks');

export default function Page() {
  return <WordPressCategoryPage category={'blocks' as WordPressCategory} />;
}
