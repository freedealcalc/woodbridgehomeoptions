import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling Your Manassas Home During Divorce | Dan White',
  description: 'Going through divorce and need to sell your Manassas home? Dan White handles divorce sales in Prince William County — fairly, quickly, and without added stress. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-manassas-va' },
  openGraph: { title: 'Selling Your Manassas Home During Divorce', description: 'Licensed agent Dan White handles divorce home sales in Manassas fairly and without added stress.', url: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-manassas-va' },
};
export default async function ManassasDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-divorce-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Selling Your <em>Manassas</em> Home During Divorce — All Your Options',
    heroSub: 'Divorce sales in Manassas and Prince William County are handled with professionalism and discretion. Whether you\'re in agreement with your spouse or working through court proceedings, the goal is the same — maximize proceeds and close cleanly so both parties can move forward.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Divorce sales handled with discretion', 'Both parties treated fairly — always'],
    faqs: [
      { q: 'Do both spouses have to agree to sell the Manassas home?', a: 'Yes — both parties on title need to agree and sign. If agreement can\'t be reached, a court can order the sale. I can work with both parties\' attorneys to facilitate an agreement before it gets to that point.' },
      { q: 'Can we sell the home as-is during a divorce?', a: 'Absolutely — no repairs, staging, or preparation required. Buyers in Manassas buy as-is and divorce situations are handled completely professionally.' },
      { q: 'Is a cash sale or MLS listing better for a divorce situation?', a: 'Cash sale is faster and cleaner — removes the home from the equation quickly. MLS listing may produce more money but extends the process. I\'ll give you honest numbers on both.' },
      { q: 'What if one spouse wants to keep the home?', a: 'A buyout is an option — one spouse refinances to remove the other from the mortgage and title. I can provide a market value assessment to help both parties agree on a fair buyout price.' },
      { q: 'How fast can you close on a divorce sale in Manassas?', a: 'Cash closings run 14-21 days. Court-ordered sales follow the court\'s timeline but we can have a buyer ready to close as soon as the order is issued.' },
      { q: 'Can closing happen remotely if one spouse has already moved?', a: 'Yes — remote and digital closings are available. Both parties don\'t need to be in the same room or even the same state.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
