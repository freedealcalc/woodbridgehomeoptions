import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Occoquan, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Occoquan, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-occoquan-va' },
  openGraph: { title: 'Sell My House Fast in Occoquan, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-occoquan-va' },
};
export default async function OccoquanPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Occoquan', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-occoquan-va', city: 'Occoquan', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Occoquan</em> Home Fast — All Five Options',
    heroSub: 'Occoquan is one of Northern Virginia\'s most unique markets — a historic riverfront town where character properties, older homes, and waterfront proximity create strong buyer interest from both investors and retail buyers. Whatever condition your home is in, there\'s a real market here.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Occoquan a good market for as-is sales?', a: 'Yes — Occoquan\'s historic character and riverfront appeal attract buyers willing to take on renovation. Condition matters less than location and character here.' },
      { q: 'Do older historic properties in Occoquan sell quickly?', a: 'Absolutely — character properties in Occoquan attract a specific buyer who values the historic setting. Investors and retail buyers both compete for these homes.' },
      { q: 'How fast can I sell in Occoquan?', a: 'Cash closings typically run 14-21 days. The unique appeal of Occoquan keeps a steady pool of interested buyers year-round.' },
      { q: 'What if my Occoquan property needs significant repairs?', a: 'Buyers who seek Occoquan properties understand the renovation trade-off. Historic charm and riverfront proximity offset condition concerns significantly.' },
      { q: 'Can I sell an inherited property in Occoquan?', a: 'Yes — estate sales in Occoquan are common and the market for them is strong. We handle the full process including probate coordination.' },
      { q: 'Is listing as-is on the MLS worth it in Occoquan?', a: 'Often the best option — Occoquan\'s unique appeal drives retail competition that frequently beats private off-market offers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
