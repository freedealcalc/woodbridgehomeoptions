import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Haymarket, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Haymarket, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-haymarket-va' },
  openGraph: { title: 'Sell My House Fast in Haymarket, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-haymarket-va' },
};
export default async function HaymarketPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Haymarket', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-haymarket-va', city: 'Haymarket', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Haymarket</em> Home Fast — All Five Options',
    heroSub: 'Haymarket sits at the western edge of Prince William County along the Route 15 corridor — a market that blends newer development with older properties on larger lots. Investors who work this corridor understand the value and move quickly when the deal is right.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Haymarket a strong market for as-is sales?', a: 'Yes — the Route 15/29 corridor attracts investors who specifically target western Prince William. Larger lots and strong appreciation make this a consistent buyer market.' },
      { q: 'How fast can I sell in Haymarket?', a: 'Cash closings typically run 14-21 days. The western PWC market is active and decisions move quickly at competitive pricing.' },
      { q: 'What if my Haymarket property is on a large lot or has outbuildings?', a: 'Larger lot properties in Haymarket attract a specific investor profile — they price in the land value and buy as-is. This is not a disadvantage.' },
      { q: 'Can I sell my Haymarket home if it needs major repairs?', a: 'Absolutely — investors who work this corridor buy homes that need significant work. No repairs, cleaning, or staging required.' },
      { q: 'Is listing as-is on the MLS an option in Haymarket?', a: 'Yes — Haymarket\'s price point and community reputation attract both retail and investor buyers on the open market. As-is listings often see strong competition.' },
      { q: 'What situations do you handle most in Haymarket?', a: 'Inherited properties, relocation, downsizing, and homes needing major work are the most common. Every situation is handled with no pressure and no obligation.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
