import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Woodbridge, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Woodbridge, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-woodbridge-va' },
  openGraph: { title: 'Sell My House Fast in Woodbridge, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-woodbridge-va' },
};
export default async function WoodbridgePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Woodbridge</em> Home Fast — All Five Options',
    heroSub: 'Woodbridge sits at the heart of Prince William County where military families, commuters, and long-time homeowners all eventually face the same question — what\'s the best way to sell. Whether you\'re dealing with PCS orders, an inherited property, or a home that needs significant work, there\'s a real market for it.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Do cash buyers actively purchase in Woodbridge and Dale City?', a: 'Yes — Prince William County is one of the most active investor markets in Northern Virginia. The combination of price points, inventory, and proximity to DC makes it a consistent target for buyers.' },
      { q: 'Can I sell a home near Quantico or Fort Belvoir on a PCS timeline?', a: 'Absolutely. Military PCS timelines are something I\'ve worked with extensively. We can structure closings around reporting dates including rent-back agreements if needed.' },
      { q: 'How fast can I sell in Woodbridge?', a: 'Cash closings typically run 14-21 days in Prince William County. The buyer pool is deep and active — competitive pricing drives fast decisions.' },
      { q: 'What if my Woodbridge home needs major repairs?', a: 'Investors in this market specifically target homes that need work. You don\'t need to fix anything — buyers price in the renovation and close as-is.' },
      { q: 'Is the as-is MLS listing a real option in Prince William County?', a: 'Yes — and often the best one. Woodbridge and Manassas have strong investor demand on the open market. Multiple buyers competing almost always beats a single off-market offer.' },
      { q: 'What about selling with tenants in place?', a: 'Very common in Prince William County. Investors buy with tenants in place regularly — you don\'t need to evict or wait for leases to expire.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
