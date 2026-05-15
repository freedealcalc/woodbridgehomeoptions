'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import MarketSnapshot from './MarketSnapshot';

let supabaseClient = null;
function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  }
  return supabaseClient;
}

function getDevice() {
  if (typeof window === 'undefined') return 'desktop';
  const w = window.innerWidth;
  if (w < 640) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

async function submitLead(formData, placement, slug) {
  const supabase = getSupabase();
  const { error } = await supabase.from('leads').insert({
    name:        formData.name,
    phone:       formData.phone,
    email:       formData.email || null,
    address:     formData.address || null,
    situation:   formData.situation || null,
    source:      'virginiahomeoptions.com',
    source_page: slug,
    placement,
    referrer:    typeof document !== 'undefined' ? document.referrer || null : null,
    device:      getDevice(),
    created_at:  new Date().toISOString(),
  });
  if (error) throw new Error(error.message);
}

const SITUATIONS = [
  'Facing foreclosure',
  'Going through divorce',
  'Inherited property',
  'Behind on payments',
  'Need to relocate quickly',
  'Property needs major repairs',
  'Tired landlord / rental property',
  'Probate / estate sale',
  'Financial hardship',
  'Downsizing',
  'Vacant or abandoned property',
  'Code violations / liens',
  'Other',
];

function MiniForm({ placement, slug, dark = false }) {
  const [form, setForm] = useState({ name: '', phone: '', situation: '' });
  const [status, setStatus] = useState('idle');
  function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('loading');
    try { await submitLead(form, placement, slug); setStatus('success'); }
    catch { setStatus('error'); }
  }
  const inp = {
    width: '100%', padding: '11px 14px', marginBottom: 10, display: 'block',
    border: dark ? '1.5px solid rgba(255,255,255,0.2)' : '1.5px solid #e2ddd8',
    borderRadius: 6, fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '0.9rem',
    color: dark ? '#ffffff' : '#1A1A1A', background: dark ? 'rgba(255,255,255,0.08)' : '#F7F5F2',
    outline: 'none', appearance: 'none', WebkitAppearance: 'none',
  };
  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,194,124,0.12)', border: '2px solid #00C27C', color: '#00C27C', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontWeight: 700 }}>✓</div>
      <p style={{ fontFamily: 'var(--font-source-serif), serif', color: dark ? '#ffffff' : '#1B2B4B', fontWeight: 600, marginBottom: 4 }}>Got it, {form.name}.</p>
      <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.85rem', color: dark ? 'rgba(255,255,255,0.6)' : '#5a5a5a' }}>Dan will reach out within a few hours.</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inp} />
      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Best phone number" required style={inp} />
      <select name="situation" value={form.situation} onChange={handleChange} style={inp}>
        <option value="">What&apos;s your situation?</option>
        {SITUATIONS.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <button type="submit" disabled={status === 'loading'} style={{ width: '100%', background: '#1F5D6C', color: '#ffffff', border: 'none', padding: '13px 20px', borderRadius: 6, fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}>
        {status === 'loading' ? 'Sending...' : 'Get My Free Options Review →'}
      </button>
      {status === 'error' && <p style={{ color: '#c0392b', fontSize: '0.8rem', marginTop: 8, fontFamily: 'var(--font-source-serif), serif' }}>Something went wrong — call (571) 989-3269.</p>}
    </form>
  );
}

function FullForm({ placement, slug }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', situation: '' });
  const [status, setStatus] = useState('idle');
  function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('loading');
    try { await submitLead(form, placement, slug); setStatus('success'); }
    catch { setStatus('error'); }
  }
  const inp = { width: '100%', padding: '12px 16px', border: '1.5px solid #e2ddd8', borderRadius: 6, fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '0.95rem', color: '#1A1A1A', background: '#F7F5F2', outline: 'none', appearance: 'none', WebkitAppearance: 'none' };
  const lbl = { display: 'block', fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5a5a5a', marginBottom: 6 };
  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,194,124,0.12)', border: '2px solid #00C27C', color: '#00C27C', fontSize: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 700 }}>✓</div>
      <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.3rem', color: '#1B2B4B', marginBottom: 8 }}>You&apos;re all set, {form.name}.</h3>
      <p style={{ fontFamily: 'var(--font-source-serif), serif', color: '#5a5a5a', marginBottom: 4 }}>Dan will call within a few hours to walk through your options.</p>
      <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', color: '#8a8a8a', fontSize: '0.9rem' }}>— Dan White, (571) 989-3269</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div><label style={lbl}>Your Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="First and last name" style={inp} /></div>
        <div><label style={lbl}>Best Phone *</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(703) 555-0100" style={inp} /></div>
      </div>
      <div style={{ marginBottom: 16 }}><label style={lbl}>Property Address *</label><input type="text" name="address" value={form.address} onChange={handleChange} required placeholder="123 Main St, Manassas, VA" style={inp} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div><label style={lbl}>Email (optional)</label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inp} /></div>
        <div><label style={lbl}>Your Situation</label><select name="situation" value={form.situation} onChange={handleChange} style={inp}><option value="">Select...</option>{SITUATIONS.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
      </div>
      <button type="submit" disabled={status === 'loading'} style={{ width: '100%', background: '#1B2B4B', color: '#ffffff', border: 'none', padding: '15px 24px', borderRadius: 6, fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
        {status === 'loading' ? 'Sending your request...' : 'Get My Free Options Review →'}
      </button>
      <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', fontSize: '0.8rem', color: '#8a8a8a', textAlign: 'center', marginTop: 12 }}>No obligation. Dan will call within a few hours — not pressure you.</p>
      {status === 'error' && <p style={{ color: '#c0392b', fontSize: '0.85rem', textAlign: 'center', marginTop: 8 }}>Something went wrong. Please call (571) 989-3269 directly.</p>}
    </form>
  );
}

export default function ContentPage({ config, stats, lastCronRun }) {
  const [openFaq, setOpenFaq] = useState(null);
  const { slug, city, county, type = 'city', h1, heroSub, trustItems, bodyContent, faqs = [] } = config;
  const trust = trustItems || ['20+ years fixing & flipping in NoVA', 'Licensed VA real estate agent', 'Pearson Smith Realty', 'Any situation — no judgment'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': type === 'blog' ? 'Article' : 'WebPage',
    name: config.metaTitle, description: config.metaDesc,
    url: `https://virginiahomeoptions.com/${slug}`,
    datePublished: '2026-01-15T00:00:00Z',
    dateModified: lastCronRun || new Date().toISOString(),
    publisher: { '@type': 'RealEstateAgent', name: 'Dan White', telephone: '+15719893269', memberOf: { '@type': 'Organization', name: 'Pearson Smith Realty' } },
  };
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;

  const options = [
    { icon: '💵', title: 'Off-Market Cash Sale', tag: 'Fastest close', tagColor: '#00C27C', desc: 'Close in as few as 7 days. No showings, no repairs, no contingencies. I put your home in front of thousands of investors simultaneously — they compete, you get a real number, not a single lowball.' },
    { icon: '🏠', title: 'As-Is MLS Listing', tag: 'Often highest price', tagColor: '#1B2B4B', desc: 'List on the open market as-is — no repairs, no staging. In competitive NoVA markets, as-is listings attract multiple offers. Often produces more than a single cash offer.' },
    { icon: '🔨', title: 'Wholetail Sale', tag: 'Best of both worlds', tagColor: '#1F5D6C', desc: 'Light cleanup, priced right, sold fast — without a full renovation. Faster than traditional, higher than a deep-discount cash offer.' },
    { icon: '📋', title: 'Seller Financing', tag: 'Monthly income stream', tagColor: '#5a5a5a', desc: 'Own your home free and clear? Carry the note and collect monthly payments instead of a lump sum. Often achieves a higher total price over time.' },
    { icon: '🔑', title: 'Lease Option', tag: 'Keep your options open', tagColor: '#5a5a5a', desc: 'Rent now, sell later. Lock in a future sale price today while collecting rent in the meantime.' },
  ];

  const situations = [
    { icon: '🏚️', label: 'Facing Foreclosure', desc: 'We can close in days — fast enough to stop the clock and protect your credit.' },
    { icon: '⚖️', label: 'Divorce or Separation', desc: 'We handle the transaction so you can focus on what matters.' },
    { icon: '🏠', label: 'Inherited Property', desc: 'Buy as-is — full of belongings, no cleanout required.' },
    { icon: '🔧', label: 'Needs Major Work', desc: 'You don\'t have to fix a thing. Buyers who want it exactly as it is.' },
    { icon: '📋', label: 'Liens or Back Taxes', desc: 'Resolved at closing from your proceeds. We\'ve navigated all of it.' },
    { icon: '✈️', label: 'Relocating', desc: 'Close on your timeline. Remote signing available.' },
    { icon: '🏘️', label: 'Tired Landlord', desc: 'Sell with tenants in place or vacant. Clean exit.' },
    { icon: '💔', label: 'Financial Hardship', desc: 'No judgment. Just options and a clear path forward.' },
  ];

  return (
    <>
      <style>{`
        .cp-opt-card { transition: box-shadow 0.25s, transform 0.25s; }
        .cp-opt-card:hover { box-shadow: 0 6px 28px rgba(27,43,75,0.12); transform: translateY(-2px); }
        .cp-sit-card { transition: box-shadow 0.2s; }
        .cp-sit-card:hover { box-shadow: 0 4px 20px rgba(27,43,75,0.15); }
        .cp-step-card { transition: box-shadow 0.3s, transform 0.3s; }
        .cp-step-card:hover { box-shadow: 0 4px 24px rgba(27,43,75,0.10); transform: translateY(-3px); }
        .cp-faq-btn:hover { color: #1F5D6C !important; }
        .cp-nav-phone:hover { color: #2d7a8c !important; }
        .cp-footer-link:hover { color: #2d7a8c !important; }
        @media (max-width: 960px) {
          .cp-two-col { grid-template-columns: 1fr !important; }
          .cp-sidebar { order: 2; position: static !important; }
          .cp-main-col { order: 1; }
          .cp-steps-grid { grid-template-columns: 1fr !important; }
          .cp-opt-grid { grid-template-columns: 1fr !important; }
          .cp-sit-grid { grid-template-columns: 1fr 1fr !important; }
          .cp-reviews-grid { grid-template-columns: 1fr !important; }
          .cp-inline-grid { grid-template-columns: 1fr !important; }
          .cp-footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cp-mobile-bar { display: flex !important; }
          body { padding-bottom: 80px; }
        }
        @media (max-width: 640px) {
          .cp-hero-section { padding: 110px 0 60px !important; }
          .cp-hero-phone { font-size: 1.4rem !important; }
          .cp-sit-grid { grid-template-columns: 1fr !important; }
          .cp-bottom-form { padding: 28px 20px !important; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(27,43,75,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(31,93,108,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <a href="/" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', textDecoration: 'none' }}>
            Virginia<span style={{ color: '#1F5D6C' }}>Home</span>Options
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="tel:+15719893269" className="cp-nav-phone" style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>(571) 989-3269</a>
            <a href="#get-offer" style={{ background: '#1F5D6C', color: '#ffffff', padding: '10px 22px', borderRadius: 4, fontFamily: 'var(--font-source-serif), serif', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Get My Offer</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="cp-hero-section" style={{ background: '#1B2B4B', color: '#ffffff', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(200,135,58,0.07) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(31,93,108,0.12)', border: '1px solid rgba(31,93,108,0.25)', color: '#2d7a8c', fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 100, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, background: '#1F5D6C', borderRadius: '50%', display: 'inline-block' }} />
              Licensed Virginia Real Estate Agent · Pearson Smith Realty
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: h1 }} />
            <p style={{ fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 36, maxWidth: 540 }}>{heroSub}</p>
            <div style={{ marginBottom: 32 }}>
              <a href="tel:+15719893269" className="cp-hero-phone" style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '1.8rem', fontWeight: 500, color: '#ffffff', textDecoration: 'none', display: 'block', marginBottom: 6, letterSpacing: '-0.01em' }}>(571) 989-3269</a>
              <a href="tel:+18882355582" style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.85rem', color: '#2d7a8c', textDecoration: 'none' }}>Toll Free: 1-888-2-SELL-VA</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {trust.map((item, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-source-serif), serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ color: '#00C27C', fontWeight: 700 }}>✓</span>{item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMBER STRIP */}
      <div style={{ background: '#1F5D6C', padding: '18px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {['5 Options — Not Just One Cash Offer', 'Licensed VA Agent · 20+ Years in NoVA', 'As-Is — No Repairs, No Cleanout', 'Free Consultation · No Pressure'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#ffffff', fontFamily: 'var(--font-source-serif), serif', fontSize: '0.9rem', fontWeight: 600 }}>✓ {item}</div>
          ))}
        </div>
      </div>

      {/* FIVE OPTIONS — immediately below the fold */}
      <div style={{ background: '#F7F5F2', padding: '64px 0 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>Your options</div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.2 }}>
              Five Paths Forward — <em style={{ fontStyle: 'italic', color: '#1F5D6C' }}>I Know Every One of Them</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1.05rem', color: '#5a5a5a', maxWidth: 620, margin: '0 auto', lineHeight: 1.8 }}>
              Most &ldquo;we buy houses&rdquo; companies can offer you one thing — a cash offer, almost certainly below market. As a licensed Virginia agent with 20 years of experience, I walk you through every option and tell you honestly which one serves you best.
            </p>
          </div>

          <div className="cp-opt-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 24 }}>
            {options.map((opt, i) => (
              <div key={i} className="cp-opt-card" style={{ background: '#ffffff', borderRadius: 10, padding: '28px 24px', border: '1px solid #e2ddd8' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                  <div style={{ fontSize: '1.6rem', flexShrink: 0 }}>{opt.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', fontWeight: 700, color: '#1B2B4B', marginBottom: 5 }}>{opt.title}</div>
                    <div style={{ display: 'inline-block', background: opt.tagColor, color: '#ffffff', fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '3px 8px', borderRadius: 100 }}>{opt.tag}</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.875rem', color: '#5a5a5a', lineHeight: 1.7, margin: 0 }}>{opt.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA after options */}
          <div style={{ background: 'linear-gradient(135deg, #1B2B4B, #243860)', borderRadius: 12, padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 64 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>Not sure which path fits your situation?</div>
              <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', margin: 0 }}>Free 20-minute call with Dan. Every option on the table. No pressure, no pitch.</p>
            </div>
            <a href="tel:+15719893269" style={{ display: 'inline-block', background: '#1F5D6C', color: '#ffffff', padding: '14px 28px', borderRadius: 6, fontFamily: 'var(--font-source-serif), serif', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Call (571) 989-3269
            </a>
          </div>
        </div>
      </div>

      {/* SITUATIONS — dark section below options */}
      <div style={{ background: '#1B2B4B', padding: '56px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>Whatever brought you here</div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>
              I&apos;ve Helped Homeowners Through Every Situation
            </h2>
            <p style={{ fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
              20+ years in Northern Virginia. No situation I haven&apos;t seen. No judgment attached to any of them.
            </p>
          </div>
          <div className="cp-sit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {situations.map((s, i) => (
              <div key={i} className="cp-sit-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(31,93,108,0.2)', borderRadius: 10, padding: '20px 18px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 700, fontSize: '0.9rem', color: '#ffffff', marginBottom: 6 }}>{s.label}</div>
                <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO COLUMN */}
      <div style={{ background: '#F7F5F2', padding: '72px 0 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <div className="cp-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>

            {/* MAIN */}
            <div className="cp-main-col">

              {/* Blog body */}
              {bodyContent && (
                <div style={{ marginBottom: 56, fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1.05rem', lineHeight: 1.8, color: '#1A1A1A' }}>
                  {typeof bodyContent === 'string' ? <div dangerouslySetInnerHTML={{ __html: bodyContent }} /> : bodyContent}
                </div>
              )}

              {/* Market Snapshot */}
              {(type === 'city' || type === 'county' || type === 'archive') && (
                <div style={{ marginBottom: 56 }}>
                  <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>Live market data</div>
                  <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 24 }}>
                    {city || county} Housing Market
                  </h2>
                  <MarketSnapshot stats={stats} regionName={city || county} lastUpdated={lastCronRun} />
                  <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #1B2B4B, #243860)', borderRadius: 12, padding: '36px 32px', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1F5D6C, #2d7a8c)' }} />
                    <div className="cp-inline-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: 10, lineHeight: 1.3 }}>The numbers above are the market average.</h3>
                        <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                          What your specific {city || county} home is worth depends on condition, location, and your timeline. Free consultation — no pressure.
                        </p>
                      </div>
                      <MiniForm placement="inline_cta" slug={slug} dark={true} />
                    </div>
                  </div>
                </div>
              )}

              {/* How It Works */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>The process</div>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 32 }}>
                  Simple. Fast. <em style={{ fontStyle: 'italic', color: '#1F5D6C' }}>On Your Terms.</em>
                </h2>
                <div className="cp-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                  {[
                    { n: 1, title: 'Tell me about your situation', desc: 'Call or fill out the form. 2 minutes. No commitment, no judgment. Dan personally handles every inquiry.' },
                    { n: 2, title: 'Get your free options review', desc: 'Dan walks you through every realistic path with honest numbers on each one. No pressure, no pitch.' },
                    { n: 3, title: 'Close when you\'re ready', desc: 'Fast as 7 days or as long as 90. Your timeline, your call.' },
                  ].map(s => (
                    <div key={s.n} className="cp-step-card" style={{ background: '#ffffff', borderRadius: 10, padding: '28px 22px', border: '1px solid #e2ddd8' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(31,93,108,0.12)', border: '1px solid rgba(31,93,108,0.3)', color: '#1F5D6C', fontFamily: 'var(--font-playfair), serif', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{s.n}</div>
                      <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', fontWeight: 700, color: '#1B2B4B', marginBottom: 8 }}>{s.title}</h3>
                      <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.9rem', color: '#5a5a5a', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div style={{ marginBottom: 56 }}>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>What homeowners say</div>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 28 }}>
                  Real Situations. <em style={{ fontStyle: 'italic', color: '#1F5D6C' }}>Real Outcomes.</em>
                </h2>
                <div className="cp-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                  {[
                    { text: 'Dan explained every option clearly. We did a wholetail and netted $40K more than the cash offer we got elsewhere.', author: 'M.T., Woodbridge' },
                    { text: "Inherited my dad's house and had no idea what to do. Dan walked me through everything with zero pressure. Closed in 3 weeks.", author: 'K.R., Manassas' },
                    { text: 'Facing foreclosure and thought I had no options. Dan helped me sell fast and kept my credit intact.', author: 'J.P., Dale City' },
                  ].map((r, i) => (
                    <div key={i} style={{ background: '#ffffff', borderRadius: 10, padding: '28px 24px', border: '1px solid #e2ddd8' }}>
                      <div style={{ color: '#1F5D6C', fontSize: '1rem', marginBottom: 10 }}>★★★★★</div>
                      <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#5a5a5a', lineHeight: 1.7, marginBottom: 12 }}>&ldquo;{r.text}&rdquo;</p>
                      <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.75rem', color: '#8a8a8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>— {r.author}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', fontSize: '0.8rem', color: '#8a8a8a', marginTop: 12 }}>Based on 13 Google reviews · Dan White, Pearson Smith Realty</p>
              </div>

              {/* FAQ */}
              {faqs.length > 0 && (
                <div style={{ marginBottom: 56 }}>
                  <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>Common questions</div>
                  <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 24 }}>Frequently Asked Questions</h2>
                  <div style={{ borderTop: '1px solid #e2ddd8' }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderBottom: '1px solid #e2ddd8' }}>
                        <button className="cp-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '18px 0', fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1rem', fontWeight: 600, color: '#1B2B4B', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'color 0.2s' }}>
                          <span>{faq.q}</span>
                          <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: '#1F5D6C' }}>{openFaq === i ? '−' : '+'}</span>
                        </button>
                        {openFaq === i && <div style={{ padding: '0 0 18px', fontFamily: 'var(--font-source-serif), serif', fontSize: '0.95rem', color: '#5a5a5a', lineHeight: 1.75 }}>{faq.a}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Form */}
              <div id="get-offer" className="cp-bottom-form" style={{ background: '#ffffff', borderRadius: 12, padding: '40px 36px', border: '1px solid #e2ddd8', boxShadow: '0 4px 24px rgba(27,43,75,0.08)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #1F5D6C, #2d7a8c)' }} />
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F5D6C', marginBottom: 10 }}>Free consultation</div>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.8rem', fontWeight: 700, color: '#1B2B4B', letterSpacing: '-0.02em', marginBottom: 10 }}>Tell Me What You&apos;re Dealing With</h2>
                <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '1rem', color: '#5a5a5a', lineHeight: 1.7, marginBottom: 28 }}>
                  No judgment. No obligation. No pressure. Just an honest conversation with someone who has been through it all — and knows {city || county || 'Northern Virginia'} inside and out.
                </p>
                <FullForm placement="bottom_form" slug={slug} />
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="cp-sidebar" style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
              <div style={{ background: '#ffffff', borderRadius: 12, padding: '28px 24px', border: '1px solid #e2ddd8', borderTop: '4px solid #1F5D6C', boxShadow: '0 4px 24px rgba(27,43,75,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#1B2B4B', border: '2px solid #1F5D6C', color: '#ffffff', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-playfair), serif' }}>DW</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 700, fontSize: '1rem', color: '#1B2B4B' }}>Dan White</div>
                    <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.7rem', color: '#8a8a8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Licensed VA Agent · 20+ Years NoVA</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', fontSize: '0.875rem', color: '#5a5a5a', lineHeight: 1.65, marginBottom: 16 }}>
                  &ldquo;Whatever brought you here, I&apos;ve seen it before. My job is to make sure you understand every option before you make any decisions.&rdquo;
                </p>
                <div style={{ marginBottom: 20 }}>
                  <a href="tel:+15719893269" style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '1.3rem', fontWeight: 500, color: '#1B2B4B', textDecoration: 'none', display: 'block', marginBottom: 4, letterSpacing: '-0.01em' }}>(571) 989-3269</a>
                  <a href="tel:+18882355582" style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.8rem', color: '#1F5D6C', textDecoration: 'none' }}>1-888-2-SELL-VA</a>
                </div>
                <div style={{ height: 1, background: '#e2ddd8', margin: '0 0 16px' }} />
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8a8a8a', marginBottom: 14 }}>Free options review — no pressure</div>
                <MiniForm placement="sticky_sidebar" slug={slug} dark={false} />
              </div>

              <div style={{ marginTop: 16, background: '#ffffff', borderRadius: 12, padding: '20px 24px', border: '1px solid #e2ddd8' }}>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8a8a8a', marginBottom: 14 }}>Why Dan White</div>
                {['20+ years fixing & flipping in NoVA', 'Licensed VA agent — Pearson Smith Realty', 'No seller commission on cash sales', 'Any condition — no repairs, no cleanout', 'Close in 7 days or 90 — your timeline', 'No judgment. No pressure. Ever.'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                    <span style={{ color: '#00C27C', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.85rem', color: '#5a5a5a', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#0f1c32', padding: '48px 0 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <div className="cp-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>Virginia<span style={{ color: '#1F5D6C' }}>Home</span>Options</div>
              <p style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>A licensed Virginia real estate agent helping homeowners through every situation — foreclosure, divorce, inherited property, fire damage, and everything in between. Five options. Honest advice. No pressure.</p>
              <p style={{ fontFamily: 'var(--font-source-serif), serif', fontStyle: 'italic', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>Licensed Real Estate Agent · Pearson Smith Realty · Virginia. Equal Housing Opportunity.</p>
            </div>
            {[
              { heading: 'Quick Links', links: [{ label: 'Sell in Manassas', href: '/sell-my-house-fast-manassas-va' }, { label: 'Sell in Woodbridge', href: '/sell-my-house-fast-woodbridge-va' }, { label: 'Sell in Fairfax', href: '/sell-my-house-fast-fairfax-va' }, { label: 'Facing Foreclosure', href: '/sell-house-pre-foreclosure-virginia' }, { label: 'Inherited Property', href: '/selling-inherited-property-virginia' }] },
              { heading: 'Contact', links: [{ label: '(571) 989-3269', href: 'tel:+15719893269' }, { label: '1-888-2-SELL-VA', href: 'tel:+18882355582' }, { label: 'dan@hssvirginia.com', href: 'mailto:dan@hssvirginia.com' }, { label: 'Pearson Smith Realty', href: 'https://pearsonsmithrealty.com' }] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>{col.heading}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(l => (
                    <a key={l.label} href={l.href} className="cp-footer-link" style={{ fontFamily: 'var(--font-source-serif), serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>{l.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-source-serif), serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>
            <div>© 2026 WoodbridgeHomeOptions.com · Dan White · Pearson Smith Realty</div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="/privacy" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Privacy</a>
              <a href="/terms" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BAR */}
      <div className="cp-mobile-bar" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200, background: '#1B2B4B', borderTop: '2px solid #1F5D6C', padding: '14px 24px', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 -4px 20px rgba(0,0,0,0.3)' }}>
        <a href="tel:+15719893269" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-dm-mono), monospace', fontWeight: 500, fontSize: '1rem', color: '#ffffff', textDecoration: 'none' }}>📞 (571) 989-3269</a>
        <a href="#get-offer" style={{ padding: '9px 20px', background: '#1F5D6C', color: '#ffffff', borderRadius: 4, fontFamily: 'var(--font-source-serif), serif', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Get My Options</a>
      </div>
    </>
  );
}
