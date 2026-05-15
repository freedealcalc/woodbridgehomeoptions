import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling an Inherited House in Woodbridge VA | Dan White',
  description: 'Think selling an inherited house means a long complicated process? Think again. Dan White shows Woodbridge heirs every path — fast, fair, and handled with care. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-woodbridge-va' },
  openGraph: { title: 'Selling an Inherited House in Woodbridge VA', description: 'Licensed agent Dan White handles inherited property sales in Prince William County — probate, as-is, fast close.', url: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-woodbridge-va' },
};
export default async function WoodbridgeInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-inherited-house-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling an <em>Inherited</em> House in Woodbridge — What You Need to Know',
    heroSub: 'Inheriting a property in Woodbridge or Prince William County often comes with more questions than answers — probate, taxes, multiple heirs, deferred maintenance. The good news is that inherited properties sell well in this market and the process is more manageable than most heirs expect.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales handled regularly', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'Do I have to go through probate before selling an inherited house in Virginia?', a: 'Usually yes — if the property was solely in the deceased\'s name, it typically needs to go through Virginia probate before it can be sold. The timeline varies but we can work around it and have the buyer lined up before probate clears.' },
      { q: 'Can I sell an inherited Woodbridge home as-is?', a: 'Absolutely — and most heirs do. You don\'t need to clean out belongings, make repairs, or do anything to prepare the property. Buyers price in the condition and buy it as-is.' },
      { q: 'What if there are multiple heirs who need to agree?', a: 'All heirs with ownership interest need to agree to the sale. I\'ve handled many multi-heir situations in Prince William County and can work with all parties and their attorneys to reach an agreement.' },
      { q: 'Will I owe taxes on the sale of an inherited Woodbridge home?', a: 'You may benefit from a step-up in basis — meaning you only pay capital gains on appreciation since the date of inheritance, not the original purchase price. Talk to a CPA before closing.' },
      { q: 'How fast can you close on an inherited property in Woodbridge?', a: 'Once probate clears, cash closings run 14-21 days. We can have a buyer committed before legal clearance so the sale closes quickly once it\'s approved.' },
      { q: 'What if the inherited home needs major repairs?', a: 'Not a problem — investors specifically seek inherited properties in any condition. The home doesn\'t need to be touched before selling.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
