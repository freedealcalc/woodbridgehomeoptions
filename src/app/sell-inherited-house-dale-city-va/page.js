import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling an Inherited House in Dale City VA | Dan White',
  description: 'Inherited a house in Dale City VA? Dan White handles inherited property sales in Prince William County — probate coordination, as-is, fast close. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-dale-city-va' },
  openGraph: { title: 'Selling an Inherited House in Dale City VA', description: 'Licensed agent Dan White handles inherited property sales in Dale City — probate, as-is, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-dale-city-va' },
};
export default async function DaleCityInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-inherited-house-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'Selling an <em>Inherited</em> House in Dale City — What Heirs Need to Know',
    heroSub: 'Dale City has a high concentration of long-term homeowners — which means inherited properties come up regularly here. The market is strong, buyers buy as-is, and the process from probate to closing is more straightforward than most heirs expect.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'Do I need to go through probate before selling an inherited Dale City home?', a: 'Usually yes — if the property was solely in the deceased\'s name it typically needs to go through Virginia probate first. We can have a buyer committed before probate clears.' },
      { q: 'Can I sell an inherited Dale City home as-is?', a: 'Absolutely — belongings, deferred maintenance, condition issues — none of it needs to be addressed. Buyers in this market price in estate condition and buy as-is.' },
      { q: 'What if multiple heirs need to agree on selling?', a: 'All heirs with ownership interest need to sign off. I\'ve worked through many multi-heir situations in Dale City and can coordinate with all parties and their attorneys.' },
      { q: 'Will I owe capital gains tax on an inherited Dale City home?', a: 'You may benefit from the step-up in basis — capital gains are calculated from the inheritance date, not the original purchase. Consult a CPA before closing.' },
      { q: 'How fast can you close on an inherited property in Dale City?', a: 'Once probate clears, cash closings run 14-21 days. We commit buyers before legal clearance to minimize post-probate delay.' },
      { q: 'What if the inherited Dale City home needs major repairs?', a: 'Not an issue — investors specifically target inherited properties in any condition in this market.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
