import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Dale City, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Dale City, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-dale-city-va' },
  openGraph: { title: 'Sell My House Fast in Dale City, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-dale-city-va' },
};
export default async function DaleCityPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Dale City</em> Home Fast — All Five Options',
    heroSub: 'Dale City is one of Prince William County\'s most established communities — a mix of long-time homeowners, military families, and investors who know the value here. Whether your home needs work, you\'re behind on payments, or life just changed fast, there are more options than a single cash offer.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Dale City a strong market for as-is sales?', a: 'Yes — Dale City\'s price point and location attract strong investor interest. Homes in any condition move when priced correctly, and competition among buyers is real.' },
      { q: 'How fast can I sell my Dale City home for cash?', a: 'Cash closings in the Dale City area typically run 14-21 days. The buyer pool is active and decisions happen quickly when the deal makes sense.' },
      { q: 'What if my home on Dale Boulevard or Minnieville Road needs major work?', a: 'Investors specifically target homes that need work in this corridor. You don\'t need to repair, clean, or stage anything — buyers price in the renovation.' },
      { q: 'Can I sell with tenants in place in Dale City?', a: 'Absolutely. Tenant-occupied properties sell regularly in Prince William County — investors are comfortable buying with leases in place.' },
      { q: 'Is listing as-is on the MLS a real option in Dale City?', a: 'Yes — and it often produces more than an off-market cash offer. Multiple buyers competing on the open market almost always beats a single private offer.' },
      { q: 'What military bases are near Dale City?', a: 'Quantico Marine Base is the closest at about 15 minutes south. Fort Belvoir is roughly 20 minutes north. We regularly work with PCS sellers from both installations.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
