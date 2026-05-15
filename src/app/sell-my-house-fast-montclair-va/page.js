import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Montclair, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Montclair, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-montclair-va' },
  openGraph: { title: 'Sell My House Fast in Montclair, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-montclair-va' },
};
export default async function MontclairPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Montclair', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-montclair-va', city: 'Montclair', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Montclair</em> Home Fast — All Five Options',
    heroSub: 'Montclair is one of Prince William County\'s most established lake communities — a mix of long-time homeowners, military families, and investors who understand the appeal of waterfront and wooded properties here. Whatever your situation, there\'s a real market for your home as-is.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Montclair a good market for as-is sales?', a: 'Yes — Montclair\'s lake community appeal and established neighborhoods attract consistent buyer interest. Properties in any condition move with competitive pricing.' },
      { q: 'Do waterfront or lake-view properties in Montclair sell as-is?', a: 'Absolutely — location drives value here. Investors and retail buyers alike are willing to take on renovation when the setting is right.' },
      { q: 'How fast can I sell my Montclair home?', a: 'Cash closings typically run 14-21 days. Montclair\'s community appeal keeps demand steady throughout the year.' },
      { q: 'What if my Montclair home needs major work?', a: 'Investors who work Prince William County specifically seek established community properties that need renovation. Condition matters less than location here.' },
      { q: 'Can I sell an inherited Montclair property?', a: 'Yes — inherited properties in established communities like Montclair are very sellable. We handle the process from start to close including probate coordination.' },
      { q: 'Is listing as-is on the MLS worth it in Montclair?', a: 'Often yes — Montclair has both investor and retail appeal. Multiple buyers competing on the open market frequently produces better results than a single private offer.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
