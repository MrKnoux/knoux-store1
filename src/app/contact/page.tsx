import { PageIntro } from '@/components/PageIntro';
import { ContactForm } from '@/components/ContactForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact', 'Contact KNOuX about digital products and engineering systems.', '/contact');
export default function Contact() { return <main id="main-content"><PageIntro index="06" label="Contact" title="Start a" italic="conversation." description="Share what you are building or the problem you are trying to solve." /><section className="contact-section section-shell"><div><p className="eyebrow">GET IN TOUCH</p><h2>What comes<br /><em>next?</em></h2><p>We read messages with context. A clear note about your project helps start the right conversation.</p><a className="text-link" href="mailto:admin@knoux.store">ADMIN@KNOUX.STORE ↗</a></div><ContactForm /></section></main>; }
