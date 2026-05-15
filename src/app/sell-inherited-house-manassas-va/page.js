import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling an Inherited House in Manassas VA | Dan White',
  description: 'Inherited a house in Manassas VA? Dan White handles inherited property sales in Prince William County — probate coordination, as-is, fast close. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-manassas-va' },
  openGraph: { title: 'Selling an Inherited House in Manassas VA', description: 'Licensed agent Dan White handles inherited property sales in Manassas — probate, as-is, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-manassas-va' },
};
export default async function ManassasInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-inherited-house-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Selling an <em>Inherited</em> House in Manassas — What to Expect',
    heroSub: 'Inherited properties in Manassas and Prince William County sell well — the investor market here is deep and buyers specifically seek homes in any condition. Whether the property is in Old Town, an established neighborhood, or needs significant work, there\'s a buyer and a clear path to closing.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'Do I need to go through probate before selling an inherited Manassas home?', a: 'Usually yes — if the property was solely in the deceased\'s name it typically goes through Prince William County probate first. We can market the property and have a buyer ready before probate closes.' },
      { q: 'Can I sell an inherited Manassas home as-is?', a: 'Absolutely — belongings, deferred maintenance, needed repairs — none of it needs to be addressed. Buyers in this market price in the condition and buy it as-is.' },
      { q: 'What if the inherited property is in Old Town Manassas?', a: 'Old Town specifically is a strong market for character properties in any condition. Historic homes with deferred maintenance attract investors and retail buyers who value the location.' },
      { q: 'Will I owe capital gains tax on the sale?', a: 'You may benefit from a step-up in basis — meaning capital gains are calculated from the date of inheritance, not the original purchase price. Consult a CPA for your specific situation.' },
      { q: 'What if multiple heirs need to agree on selling the Manassas property?', a: 'All heirs with ownership interest need to sign off. I\'ve coordinated many multi-heir situations in Prince William County and can work through the process with all parties.' },
      { q: 'How fast can you close on an inherited property in Manassas?', a: 'Once probate clears or executor authority is confirmed, cash closings run 14-21 days. We can have a committed buyer before legal clearance to minimize delay.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
