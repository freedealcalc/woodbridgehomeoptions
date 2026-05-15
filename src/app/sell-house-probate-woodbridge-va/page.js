import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a House in Probate in Woodbridge VA | Dan White',
  description: 'Need to sell a house in probate in Woodbridge VA? Dan White handles probate property sales in Prince William County — coordinating with attorneys, buying as-is, fast close when approved. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-probate-woodbridge-va' },
  openGraph: { title: 'Selling a House in Probate in Woodbridge VA', description: 'Licensed agent Dan White handles probate sales in Prince William County — coordinating with attorneys throughout.', url: 'https://www.woodbridgehomeoptions.com/sell-house-probate-woodbridge-va' },
};
export default async function WoodbridgeProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-probate-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Probate</em> Property in Woodbridge — How It Works',
    heroSub: 'Probate sales in Prince William County follow a specific legal process — but they close regularly and often faster than heirs expect. Whether you\'re an executor, administrator, or heir, understanding your options early makes the entire process smoother.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'Can a house be sold while in probate in Virginia?', a: 'Yes — Virginia allows probate properties to be sold once the executor or administrator is appointed by the court. The sale proceeds go through the estate before distribution to heirs.' },
      { q: 'How long does probate take in Virginia before I can sell?', a: 'Virginia probate varies — simple estates can move in a few months, complex ones longer. We can market the property and have a buyer committed before probate closes so the sale moves quickly once approved.' },
      { q: 'Does the court need to approve the sale?', a: 'In most Virginia probate cases, the executor has authority to sell without court approval — but this depends on the will and estate structure. Your probate attorney will confirm the specific requirements.' },
      { q: 'Can I sell the Woodbridge probate property as-is?', a: 'Yes — and most probate properties are sold as-is. You\'re not required to clean out belongings, make repairs, or prepare the property in any way.' },
      { q: 'What if there are multiple heirs who need to agree on the sale?', a: 'All heirs with an interest need to sign off. I\'ve worked through many multi-heir situations in Prince William County and can coordinate with all parties and their respective attorneys.' },
      { q: 'How fast can you close on a probate property in Woodbridge?', a: 'Once court approval or executor authority is confirmed, cash closings run 14-21 days. We can often have a committed buyer before legal clearance so the close happens immediately after.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
