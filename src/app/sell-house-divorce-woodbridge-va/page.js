import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling Your Woodbridge Home During Divorce | Dan White',
  description: 'Think selling during divorce means leaving money on the table? Think again. Dan White shows Woodbridge sellers going through divorce every path — and which one works for both parties. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-woodbridge-va' },
  openGraph: { title: 'Selling Your Woodbridge Home During Divorce', description: 'All five options from a licensed agent who handles divorce sales in Prince William County regularly.', url: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-woodbridge-va' },
};
export default async function WoodbridgeDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-divorce-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling Your <em>Woodbridge</em> Home During Divorce — All Your Options',
    heroSub: 'Divorce is one of the most common reasons Woodbridge homeowners need to sell quickly. Whether you\'re going through a mutual agreement or a court-ordered sale, the goal is the same — maximize what both parties walk away with and close without unnecessary delay.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Divorce sales handled with discretion', 'Both parties treated fairly — always'],
    faqs: [
      { q: 'Can I sell my Woodbridge home during a divorce?', a: 'Yes — selling during divorce is very common and often the cleanest resolution. Both parties split the proceeds and move forward. We handle the transaction professionally and without taking sides.' },
      { q: 'What if my spouse and I disagree on the sale?', a: 'If both parties can\'t agree, a court can order the sale. In the meantime, I can work with both parties\' attorneys to structure a transaction that satisfies everyone and avoids court involvement.' },
      { q: 'Is a fast cash sale better than listing during a divorce?', a: 'It depends on the situation. A fast cash sale removes the home from the equation quickly — no showings, no back and forth, clean split. An as-is MLS listing may produce more money but takes longer. I\'ll walk you through both honestly.' },
      { q: 'Can we sell the house as-is during a divorce?', a: 'Absolutely — you don\'t need to make repairs or stage the home. Buyers in this market buy as-is and divorce situations are handled with complete discretion.' },
      { q: 'How fast can you close on a divorce sale in Woodbridge?', a: 'Cash closings typically run 14-21 days. If a court deadline is involved, tell me the date and I\'ll tell you what\'s possible.' },
      { q: 'Do both parties need to be present at closing?', a: 'Not necessarily — remote and power of attorney closings are available if one party has already relocated or prefers not to attend.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
