import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Manassas Park, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Manassas Park, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-manassas-park-va' },
  openGraph: { title: 'Sell My House Fast in Manassas Park, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-manassas-park-va' },
};
export default async function ManassasParkPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas Park', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-manassas-park-va', city: 'Manassas Park', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Manassas Park</em> Home Fast — All Five Options',
    heroSub: 'Manassas Park is an independent city surrounded by Prince William County — a compact market with real investor interest driven by its price point and location. Whether you\'re dealing with a distressed property or just need to move on quickly, there\'s a buyer for your home as-is.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Manassas Park a good market for cash sales?', a: 'Yes — Manassas Park\'s price point attracts consistent investor interest. Buyers who work the broader Manassas market are very active here.' },
      { q: 'How fast can I sell in Manassas Park?', a: 'Cash closings typically run 14-21 days. The market here moves quickly when properties are priced at investor levels.' },
      { q: 'What if my home needs significant repairs?', a: 'Investors who work this market specifically target homes that need work. You don\'t need to fix or clean anything before selling.' },
      { q: 'Can I sell if I\'m behind on mortgage payments in Manassas Park?', a: 'Yes — selling fast is often the best way to resolve pre-foreclosure situations and protect your credit. We can close quickly enough to stop the clock in most cases.' },
      { q: 'Is listing as-is on the MLS an option in Manassas Park?', a: 'Yes — the open market often produces better results than a single private offer. Investor demand in this area supports strong as-is MLS pricing.' },
      { q: 'What situations do you handle most in Manassas Park?', a: 'Foreclosure, inherited properties, tired landlords, and homes that need major repairs are the most common. No situation is too complicated.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
