import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Dumfries, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Dumfries, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-dumfries-va' },
  openGraph: { title: 'Sell My House Fast in Dumfries, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-dumfries-va' },
};
export default async function DumfriesPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dumfries', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-dumfries-va', city: 'Dumfries', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Dumfries</em> Home Fast — All Five Options',
    heroSub: 'Dumfries sits at the southern end of Prince William County near the Quantico corridor — a market with consistent investor activity driven by military families, long-time homeowners, and properties that range from pristine to needing significant work. Every situation has options here.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Dumfries a strong market for as-is sales?', a: 'Yes — Dumfries attracts investors who specifically target the southern Prince William corridor. Homes in any condition move with competitive pricing.' },
      { q: 'How close is Dumfries to Quantico?', a: 'Dumfries is about 5 miles from Quantico Marine Base — making it one of the most active PCS markets in Prince William County. We work with military sellers regularly.' },
      { q: 'How fast can I sell in Dumfries?', a: 'Cash closings typically run 14-21 days. The military corridor drives consistent buyer demand that keeps the market active year-round.' },
      { q: 'Can I sell my Dumfries home if it needs major work?', a: 'Absolutely — investors who work this corridor specifically seek homes that need renovation. No repairs, no cleaning, no staging required.' },
      { q: 'What if I\'m facing foreclosure in Dumfries?', a: 'Selling quickly is often the best way to resolve pre-foreclosure and protect your credit. We can close fast enough to stop the process in most cases.' },
      { q: 'Is the as-is MLS listing a real option in Dumfries?', a: 'Yes — and it often beats a single off-market offer. The Quantico corridor draws both investor and retail buyers to as-is listings.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
