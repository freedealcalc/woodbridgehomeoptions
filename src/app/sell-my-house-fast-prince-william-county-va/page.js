import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Prince William County, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Prince William County, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-prince-william-county-va' },
  openGraph: { title: 'Sell My House Fast in Prince William County, VA', description: 'All five options from a licensed agent with 20+ years in Prince William County.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-prince-william-county-va' },
};
export default async function PrinceWilliamCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-prince-william-county-va', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'Sell Your <em>Prince William County</em> Home Fast — All Five Options',
    heroSub: 'Prince William County is one of the most active real estate markets in Virginia — from Woodbridge and Dale City in the east to Haymarket and Nokesville in the west. Military families, long-time homeowners, landlords, and estate sellers all find real options here beyond a single cash offer.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'All of Prince William County covered'],
    faqs: [
      { q: 'Do you cover all of Prince William County?', a: 'Yes — Woodbridge, Dale City, Lake Ridge, Manassas, Manassas Park, Gainesville, Haymarket, Bristow, Dumfries, Montclair, Occoquan, Triangle, Nokesville, and everything in between.' },
      { q: 'Is Prince William County a strong market for as-is sales?', a: 'One of the strongest in Northern Virginia. The combination of price points, military demand, and investor activity makes this a consistent buyer market for homes in any condition.' },
      { q: 'How fast can I close in Prince William County?', a: 'Cash closings typically run 14-21 days across the county. Competitive pricing drives fast decisions from an active buyer pool.' },
      { q: 'Do you work with military sellers in Prince William County?', a: 'Constantly — Quantico, Fort Belvoir, and Pentagon families represent a significant portion of motivated sellers across the county. PCS timelines are something we handle routinely.' },
      { q: 'What\'s the most common situation you handle in Prince William County?', a: 'Foreclosure/pre-foreclosure, inherited properties, military PCS, tired landlords, and homes needing major repairs. Every situation is handled with no pressure and no obligation.' },
      { q: 'Does condition matter in Prince William County?', a: 'Not to the right buyer. Investors across the county specifically seek homes that need work. You never need to repair, clean, or stage before selling.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
