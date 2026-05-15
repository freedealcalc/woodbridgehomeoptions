import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Inherited Property in Prince William County VA | Dan White',
  description: 'Inherited a house in Prince William County? Dan White handles inherited property sales across PWC — probate coordination, as-is, fast close. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-prince-william-county' },
  openGraph: { title: 'Inherited Property in Prince William County VA', description: 'Licensed agent Dan White handles inherited property sales across Prince William County — probate, as-is, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-inherited-house-prince-william-county' },
};
export default async function PWCInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-inherited-house-prince-william-county', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'Inherited a Property in <em>Prince William County</em>? Here\'s What to Do Next',
    heroSub: 'Inherited properties across Prince William County sell well — from Woodbridge to Dale City to Manassas. The investor market here is deep, buyers buy as-is, and the process is more manageable than most heirs expect. Probate doesn\'t have to slow everything down.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'Do I have to complete probate before selling an inherited Prince William County home?', a: 'Usually yes — if the property was solely in the deceased\'s name it typically goes through Virginia probate first. We can market the property and commit a buyer before probate closes to minimize delay.' },
      { q: 'Can I sell the inherited property as-is?', a: 'Absolutely — belongings, deferred maintenance, needed repairs — none of it needs to be addressed. Buyers in Prince William County price in condition and buy as-is.' },
      { q: 'What if there are multiple heirs who need to agree?', a: 'All heirs with ownership interest need to sign off on the sale. I\'ve coordinated many multi-heir situations across Prince William County and can work through the process with all parties.' },
      { q: 'Will I owe taxes on the sale of an inherited home in Virginia?', a: 'The step-up in basis rule means capital gains are calculated from the date of inheritance — not the original purchase price. Consult a CPA for your specific situation.' },
      { q: 'What areas of Prince William County do you handle inherited property sales?', a: 'All of it — Woodbridge, Dale City, Manassas, Lake Ridge, Gainesville, Haymarket, Dumfries, Montclair, Occoquan, and everywhere in between.' },
      { q: 'How fast can you close on an inherited property in Prince William County?', a: 'Once probate clears, cash closings run 14-21 days. We commit buyers before legal clearance to close immediately after.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
