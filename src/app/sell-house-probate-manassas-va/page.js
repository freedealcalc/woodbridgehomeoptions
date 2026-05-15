import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a House in Probate in Manassas VA | Dan White',
  description: 'Need to sell a house in probate in Manassas VA? Dan White coordinates with attorneys, buys as-is, closes fast once approved. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-probate-manassas-va' },
  openGraph: { title: 'Selling a House in Probate in Manassas VA', description: 'Licensed agent Dan White handles probate property sales in Manassas — coordinating with attorneys throughout.', url: 'https://www.woodbridgehomeoptions.com/sell-house-probate-manassas-va' },
};
export default async function ManassasProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-probate-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Probate</em> Property in Manassas — A Clear Path Forward',
    heroSub: 'Probate sales in Manassas follow Virginia\'s estate process — but they close regularly and the market here is strong enough to move quickly once legal clearance is obtained. Whether you\'re an executor, administrator, or heir, understanding the process early makes everything smoother.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — no cleanout required'],
    faqs: [
      { q: 'Can a Manassas home be sold while in probate?', a: 'Yes — once the executor or administrator is appointed by the Prince William County Circuit Court, the estate can sell the property. Proceeds flow through the estate before distribution.' },
      { q: 'Does the court need to approve the sale in Virginia?', a: 'In most cases the executor has independent authority to sell — but this depends on the will and estate structure. Your probate attorney will confirm what\'s required for your specific situation.' },
      { q: 'Can I sell the Manassas probate property as-is?', a: 'Yes — and most probate properties are sold as-is. No cleanout, no repairs, no staging required. Buyers in this market are fully prepared for estate condition.' },
      { q: 'How long does probate take in Prince William County?', a: 'Simple estates in Virginia can clear in a few months. Complex estates with disputes or unclear title take longer. We can have a committed buyer before probate clears to minimize delay.' },
      { q: 'What if there are multiple heirs who disagree about selling?', a: 'All heirs need to agree or a court can authorize the sale. I can coordinate with all parties and their attorneys to work through disagreements before court involvement becomes necessary.' },
      { q: 'How fast can you close on a probate property in Manassas once cleared?', a: 'Cash closings run 14-21 days from legal clearance. We commit the buyer beforehand so closing happens immediately after approval.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
