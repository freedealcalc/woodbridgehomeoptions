import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Manassas, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Manassas, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-manassas-va' },
  openGraph: { title: 'Sell My House Fast in Manassas, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-manassas-va' },
};
export default async function ManassasPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Manassas</em> Home Fast — All Five Options',
    heroSub: 'Manassas has one of the most active investor markets in Northern Virginia — Old Town charm, strong commuter demand, and a deep pool of buyers who specifically seek homes in any condition. Whether you\'re dealing with a distressed property, an estate, or just need to move fast, there\'s a real market waiting.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Manassas a strong market for cash sales?', a: 'Very strong. Manassas has consistent investor demand driven by its price point, Old Town appeal, and proximity to major employment corridors. Homes in any condition attract real competition.' },
      { q: 'How fast can I close in Manassas?', a: 'Cash closings typically run 14-21 days. With multiple buyers in our network targeting this market, competitive deals move quickly.' },
      { q: 'What about Old Town Manassas — does condition matter there?', a: 'Old Town specifically attracts buyers who want character properties they can renovate. Condition matters less than location — buyers price in the work.' },
      { q: 'Can I sell my Manassas home if I\'m behind on payments?', a: 'Yes — selling is often the best way to stop the foreclosure clock and protect your credit. We can close fast enough to resolve most pre-foreclosure situations.' },
      { q: 'What if my home is a rental with problem tenants?', a: 'Investors in Manassas regularly buy tenant-occupied properties. You don\'t need to wait for leases to expire or deal with eviction before selling.' },
      { q: 'Is listing as-is on the MLS worth it in Manassas?', a: 'Often yes — Manassas has strong retail and investor demand on the open market. Multiple offers on as-is listings are common, especially in Old Town and established neighborhoods.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
