import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'We Buy Houses Prince William County VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Prince William County sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/we-buy-houses-prince-william-county-va' },
  openGraph: { title: 'We Buy Houses Prince William County VA', description: 'Not just one cash offer — all five options from a licensed agent with 20+ years in Prince William County.', url: 'https://www.woodbridgehomeoptions.com/we-buy-houses-prince-william-county-va' },
};
export default async function WeBuyHousesPWCPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'we-buy-houses-prince-william-county-va', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: '<em>We Buy Houses</em> in Prince William County — But That\'s Not All We Do',
    heroSub: 'Most "we buy houses" companies in Prince William County offer you one thing — a single cash offer, almost certainly below market. As a licensed Virginia agent with 20 years of experience and access to thousands of investors, I give you every option and tell you honestly which one puts more money in your pocket.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Thousands of competing cash buyers', 'Not just one offer — all five options'],
    faqs: [
      { q: 'What makes you different from other "we buy houses" companies in Prince William County?', a: 'I\'m a licensed agent, not just a cash buyer. That means I can show you every option — off-market cash sale, as-is MLS listing, wholetail, seller financing, and lease option. Most cash buyers can only offer one path.' },
      { q: 'Do you actually buy houses in Prince William County?', a: 'Yes — I work with a network of thousands of investors who actively buy in Woodbridge, Dale City, Manassas, Gainesville, and across the county. Multiple buyers competing means better numbers for you.' },
      { q: 'How is listing as-is different from selling to a cash buyer?', a: 'Listing as-is puts your home in front of every buyer in the market — investors and retail buyers competing simultaneously. That competition almost always produces a better outcome than a single private offer.' },
      { q: 'How fast can I sell in Prince William County?', a: 'Cash closings typically run 14-21 days. As-is MLS listings in strong markets can close in 30-45 days at higher prices. We\'ll walk you through the timeline for each option.' },
      { q: 'Do I have to pay commissions if I sell to a cash buyer?', a: 'No — cash sales are typically commission-free. If we list as-is on the MLS, standard commissions apply but the higher sale price usually more than offsets the difference.' },
      { q: 'What areas of Prince William County do you cover?', a: 'All of it — Woodbridge, Dale City, Lake Ridge, Manassas, Manassas Park, Gainesville, Haymarket, Bristow, Dumfries, Montclair, Occoquan, Triangle, and Nokesville.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
