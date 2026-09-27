import type { Metadata } from 'next';

const origin = 'https://knoux.store';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: title === 'KNOuX' ? title : `${title} — KNOuX`,
    description,
    alternates: { canonical: `${origin}${path}` },
    openGraph: { title, description, url: `${origin}${path}`, siteName: 'KNOuX', type: 'website', images: [{ url: `${origin}/og.jpg`, width: 600, height: 600, alt: 'KNOuX particle mark' }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${origin}/og.jpg`] },
  };
}
