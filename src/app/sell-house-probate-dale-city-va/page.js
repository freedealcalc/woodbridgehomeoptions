import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a House in Probate in Dale City VA | Dan White',
  description: 'Need to sell a house in probate in Dale City VA? Dan White coordinates with attorneys, buys as-is, closes fast once approved. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-probate-dale-city-va' },
  openGraph: { title: 'Selling a House in Probate in Dale City VA', description: 'Licensed agent Dan White handles probate property sales in Dale City — coordinating with attorneys throughout.', url: 'https://www.woodbridgehomeoptions.com/sell-house-probate-dale-city-va' },
};
export default async function DaleCityProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-house-probate-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Probate</em> Property in Dale City — How the Process Works',
    heroSub: 'Dale City has a large population of long-time homeowners — meaning probate sales come up regularly here. The process follows Virginia estate law, but it\'s manageable and the Dale City market is active enough to move quickly once legal clearance is obtained.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — no cleanout required'],
    faqs: [
      { q: 'Can a Dale City home be sold while in probate?', a: 'Yes — once the executor is appointed by the court, the estate can sell. Proceeds flow through the estate before distribution to heirs.' },
      { q: 'How long does probate take in Prince William County?', a: 'Simple Virginia estates can clear in a few months. We can commit a buyer before probate closes so the sale happens immediately after approval.' },
      { q: 'Can the Dale City probate property be sold as-is?', a: 'Yes — no cleanout, no repairs, no preparation required. Estate condition is standard for probate properties and buyers in this market are fully prepared for it.' },
      { q: 'What if heirs disagree about selling the Dale City property?', a: 'All heirs need to agree or a court can authorize the sale. I can work with all parties and their attorneys before court involvement becomes necessary.' },
      { q: 'Does the court need to approve the sale in Virginia?', a: 'In most cases the executor has independent authority to sell. Your probate attorney will confirm what\'s required for your specific estate.' },
      { q: 'How fast can you close on a Dale City probate property?', a: 'Cash closings run 14-21 days from legal clearance. We have buyers committed beforehand to minimize delay.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
