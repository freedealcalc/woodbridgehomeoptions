import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Facing Foreclosure in Woodbridge VA — Your Options | Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Woodbridge sellers facing foreclosure every path — and which one protects the most equity. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-foreclosure-woodbridge-va' },
  openGraph: { title: 'Facing Foreclosure in Woodbridge VA', description: 'You have more options than you think — licensed agent Dan White explains every path.', url: 'https://www.woodbridgehomeoptions.com/sell-house-foreclosure-woodbridge-va' },
};
export default async function WoodbridgeForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-foreclosure-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Facing Foreclosure in <em>Woodbridge</em> — You Have More Options Than You Think',
    heroSub: 'If you\'re behind on payments or have received a foreclosure notice in Woodbridge or Prince William County, the clock is running — but it hasn\'t run out. Most homeowners in pre-foreclosure have more time and more options than they realize. A fast sale can stop the process, protect your credit, and put money in your pocket.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Pre-foreclosure sales handled regularly', 'Fast closings — 14 days or less when needed'],
    faqs: [
      { q: 'How long does foreclosure take in Virginia?', a: 'Virginia is a non-judicial foreclosure state — meaning the process can move fast. Once a Notice of Default is filed, you typically have 60-90 days before a foreclosure sale. Acting quickly is critical.' },
      { q: 'Can I sell my Woodbridge home while in foreclosure?', a: 'Yes — you can sell your home up until the foreclosure sale date. A fast cash closing can stop the process entirely and may leave you with equity after the mortgage is paid off.' },
      { q: 'Will selling stop the foreclosure?', a: 'Yes — if you close before the auction date, the proceeds pay off the mortgage and the foreclosure stops. Your credit takes a far smaller hit than a completed foreclosure.' },
      { q: 'What if I owe more than my Woodbridge home is worth?', a: 'A short sale may be an option — your lender agrees to accept less than what\'s owed. It\'s not ideal but it\'s far better than a foreclosure on your record.' },
      { q: 'How fast can you close in Woodbridge to stop a foreclosure?', a: 'Cash closings typically run 14-21 days. For urgent situations we\'ve closed in under 10 days. Tell me your auction date and I\'ll tell you if we can beat it.' },
      { q: 'Do I need to fix anything before selling if I\'m in foreclosure?', a: 'Never — buyers in this market buy as-is. Your situation is common and there\'s no judgment attached to it.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
