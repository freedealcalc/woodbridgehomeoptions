import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling Your Dale City Home During Divorce | Dan White',
  description: 'Going through divorce and need to sell your Dale City home? Dan White handles divorce sales in Prince William County — fairly, quickly, without added stress. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-dale-city-va' },
  openGraph: { title: 'Selling Your Dale City Home During Divorce', description: 'Licensed agent Dan White handles divorce home sales in Dale City fairly and without added stress.', url: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-dale-city-va' },
};
export default async function DaleCityDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-house-divorce-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'Selling Your <em>Dale City</em> Home During Divorce — All Your Options',
    heroSub: 'Divorce sales in Dale City are handled professionally and without taking sides. Whether both parties agree or the sale is court-ordered, the priority is the same — close cleanly, maximize what both parties walk away with, and move forward.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Divorce sales handled with discretion', 'Both parties treated fairly — always'],
    faqs: [
      { q: 'Can I sell my Dale City home while going through a divorce?', a: 'Yes — selling during divorce is very common in Dale City. Both parties split the net proceeds and move forward. The transaction is handled professionally without judgment.' },
      { q: 'What if my spouse and I can\'t agree on the sale?', a: 'If both parties can\'t reach agreement, a Prince William County court can order the sale. I can work with both attorneys before it gets to that point.' },
      { q: 'Is a fast cash sale better than listing during a divorce in Dale City?', a: 'Cash sale removes the home from the equation quickly with certainty. MLS listing may produce more but takes longer. I\'ll give you honest numbers on both.' },
      { q: 'Do we have to make repairs before selling?', a: 'Never — Dale City buyers buy as-is. Divorce situations are handled with complete discretion and no judgment.' },
      { q: 'How fast can you close on a divorce sale in Dale City?', a: 'Cash closings run 14-21 days. Court-ordered sales close as soon as the order is issued — we can have a buyer committed beforehand.' },
      { q: 'Can one spouse handle the sale if the other has already moved out?', a: 'Both parties on title need to sign closing documents. Remote and power of attorney options are available for parties who have already relocated.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
