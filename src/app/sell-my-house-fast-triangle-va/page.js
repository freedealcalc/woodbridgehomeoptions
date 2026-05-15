import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Triangle, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Triangle, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-triangle-va' },
  openGraph: { title: 'Sell My House Fast in Triangle, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-triangle-va' },
};
export default async function TrianglePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Triangle', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-triangle-va', city: 'Triangle', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Triangle</em> Home Fast — All Five Options',
    heroSub: 'Triangle sits just outside the Quantico Marine Base gate — one of the most active military seller markets in Prince William County. PCS orders, deployments, and base-related moves drive consistent transaction volume here year-round.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Triangle a strong market given its proximity to Quantico?', a: 'Yes — the Quantico corridor drives consistent buyer and seller activity in Triangle. Military families represent a significant portion of both buyers and sellers here.' },
      { q: 'Can I sell my Triangle home on a PCS timeline?', a: 'Absolutely — PCS timelines are something we handle regularly in this corridor. We can structure closings around reporting dates and handle remote signing.' },
      { q: 'How fast can I sell in Triangle?', a: 'Cash closings typically run 14-21 days. The military-driven market keeps demand active year-round.' },
      { q: 'What if my Triangle home needs repairs?', a: 'Investors who work the Quantico corridor buy homes in any condition. No repairs, cleaning, or staging required.' },
      { q: 'Can I sell my Triangle home if it\'s currently rented?', a: 'Yes — tenant-occupied properties are common in the military corridor and investors buy them regularly with leases in place.' },
      { q: 'Is listing as-is on the MLS an option near Quantico?', a: 'Yes — the military market drives both investor and retail demand for as-is properties. Multiple offers are common when priced correctly.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
