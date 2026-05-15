import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling During Divorce in Prince William County VA | Dan White',
  description: 'Need to sell your Prince William County home during a divorce? Dan White handles divorce sales across PWC fairly, quickly, and without added stress. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-prince-william-county' },
  openGraph: { title: 'Selling During Divorce in Prince William County VA', description: 'Licensed agent Dan White handles divorce home sales across Prince William County — fairly and without taking sides.', url: 'https://www.woodbridgehomeoptions.com/sell-house-divorce-prince-william-county' },
};
export default async function PWCDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-house-divorce-prince-william-county', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'Selling Your <em>Prince William County</em> Home During Divorce',
    heroSub: 'Divorce home sales across Prince William County are handled with professionalism and complete discretion. From Woodbridge to Manassas to Gainesville — the goal is the same everywhere: close cleanly, maximize what both parties net, and move forward without unnecessary delay.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Divorce sales handled with discretion', 'Both parties treated fairly — always'],
    faqs: [
      { q: 'Can I sell my Prince William County home while going through a divorce?', a: 'Yes — selling the marital home is one of the most common resolutions in divorce. Both parties split the proceeds and the property is removed from the equation.' },
      { q: 'Does a divorce sale have to go through the court in Prince William County?', a: 'Only if both parties can\'t agree. If both spouses agree to sell, no court order is needed — just both signatures at closing.' },
      { q: 'What if one spouse wants to keep the home in Prince William County?', a: 'A buyout is an option — one spouse refinances to remove the other from the mortgage and title. I can provide a market valuation to help both parties agree on a fair price.' },
      { q: 'Can we sell the home as-is during the divorce?', a: 'Yes — no repairs or preparation required. As-is sales are completely normal in Prince William County and handled without judgment.' },
      { q: 'What areas of Prince William County do you handle divorce sales?', a: 'All of it — Woodbridge, Dale City, Manassas, Lake Ridge, Gainesville, Haymarket, and every community in between.' },
      { q: 'Can closing happen if one spouse has already moved out of Prince William County?', a: 'Yes — remote and digital closings are available. Both parties don\'t need to be present or even in the same state.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
