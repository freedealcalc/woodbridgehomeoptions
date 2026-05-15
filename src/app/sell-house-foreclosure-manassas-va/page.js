import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Facing Foreclosure in Manassas VA — Your Options | Dan White',
  description: 'Facing foreclosure in Manassas VA? Dan White shows you every path before the auction date — fast close, protect your credit. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-foreclosure-manassas-va' },
  openGraph: { title: 'Facing Foreclosure in Manassas VA', description: 'Licensed agent Dan White explains every option for Manassas homeowners facing foreclosure.', url: 'https://www.woodbridgehomeoptions.com/sell-house-foreclosure-manassas-va' },
};
export default async function ManassasForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-foreclosure-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Facing Foreclosure in <em>Manassas</em> — You Still Have Options',
    heroSub: 'Manassas homeowners facing foreclosure have more runway than most realize — Virginia\'s process gives you time to act, but not unlimited time. A fast sale before the auction date can stop foreclosure entirely, protect your credit, and potentially leave you with equity.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Pre-foreclosure sales handled urgently', 'Fast closings — 14 days or less when needed'],
    faqs: [
      { q: 'How long does foreclosure take in Manassas VA?', a: 'Virginia is a non-judicial foreclosure state — once a Notice of Default is filed, the process typically takes 60-90 days to auction. Acting before the Notice is filed gives you the most options.' },
      { q: 'Can I still sell my Manassas home after receiving a foreclosure notice?', a: 'Yes — you can sell up until the foreclosure auction date. A fast cash closing pays off the mortgage and stops the process entirely.' },
      { q: 'Will a pre-foreclosure sale hurt my credit less than foreclosure?', a: 'Significantly less. A completed foreclosure stays on your credit for 7 years and affects future financing. A pre-foreclosure sale is treated much more favorably.' },
      { q: 'What if I\'m underwater on my Manassas home?', a: 'A short sale may be possible — your lender accepts less than the full payoff. Not ideal but far better than foreclosure on your record.' },
      { q: 'How fast can you close in Manassas to stop a foreclosure?', a: 'Cash closings run 14-21 days. For urgent situations approaching an auction date, tell me your timeline and I\'ll tell you what\'s possible.' },
      { q: 'Do I need to fix anything before selling in pre-foreclosure?', a: 'Never — buyers buy as-is in any condition. Pre-foreclosure situations are common and handled without judgment.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
