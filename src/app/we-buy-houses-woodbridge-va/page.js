import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'We Buy Houses Woodbridge VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Woodbridge, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/we-buy-houses-woodbridge-va' },
  openGraph: { title: 'We Buy Houses Woodbridge VA', description: 'Not just one cash offer — all five options from a licensed agent with 20+ years in Woodbridge.', url: 'https://www.woodbridgehomeoptions.com/we-buy-houses-woodbridge-va' },
};
export default async function WeBuyHousesWoodbridgePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'we-buy-houses-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: '<em>We Buy Houses</em> in Woodbridge VA — But You Deserve More Than One Offer',
    heroSub: 'Every "we buy houses" company in Woodbridge will give you one number — take it or leave it. As a licensed Virginia agent with twenty years of hands-on experience in this market and access to thousands of competing investors, I make sure you know every option before you decide anything.',
    trustItems: ['20+ years fixing & flipping in Woodbridge', 'Licensed VA real estate agent', 'Thousands of competing cash buyers', 'Five options — not just one'],
    faqs: [
      { q: 'Are there real cash buyers actively purchasing in Woodbridge right now?', a: 'Yes — Woodbridge is one of the most active investor markets in Northern Virginia. Multiple buyers compete for well-priced homes in any condition.' },
      { q: 'How is your approach different from other cash buyers in Woodbridge?', a: 'I\'m a licensed agent who can offer you five different paths — not just a single cash offer. Off-market sale, as-is MLS listing, wholetail, seller financing, and lease option are all on the table.' },
      { q: 'How fast can you close in Woodbridge?', a: 'Cash closings typically run 14-21 days. For urgent situations like foreclosure or PCS orders, we\'ve closed faster.' },
      { q: 'Do I need to repair or clean my Woodbridge home before selling?', a: 'Never — buyers in this market specifically seek homes in any condition. Condition is priced in, not used as a reason to walk away.' },
      { q: 'What neighborhoods in Woodbridge do you cover?', a: 'All of them — Old Bridge, Rippon Landing, Marumsco, Powells Creek, Belmont Bay, and every community in between.' },
      { q: 'Is listing as-is on the MLS worth it in Woodbridge?', a: 'Often yes — Woodbridge has strong investor and retail demand on the open market. Multiple competing buyers frequently produce a better result than any single private cash offer.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
