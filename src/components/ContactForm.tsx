'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return;
    const data = new FormData(form); setStatus('sending'); setMessage('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(data)) });
      if (!response.ok) throw new Error('Delivery is unavailable. Please use email instead.');
      setStatus('sent'); setMessage('Your message was delivered.'); form.reset();
    } catch (error) { setStatus('error'); setMessage(error instanceof Error ? error.message : 'Could not deliver your message.'); }
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Name" /></label><label>Email address<input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" /></label></div><label>What are you working on?<textarea name="message" required minLength={10} maxLength={4000} rows={6} placeholder="Tell us about the idea, challenge or project." /></label><div className="honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} name="website" autoComplete="off" /></label></div><div className="form-bottom"><span>Or email us directly at <a href="mailto:admin@knoux.store">admin@knoux.store</a></span><button type="submit" className="button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING…' : 'SEND MESSAGE ↗'}</button></div><p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p></form>;
}
