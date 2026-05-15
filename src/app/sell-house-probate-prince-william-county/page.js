import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Probate Property Sales in Prince William County VA | Dan White',
  description: 'Need to sell a probate property in Prince William County? Dan White coordinates with estate attorneys, buys as-is, closes fast once approved. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-probate-prince-william-county' },
  openGraph: { title: 'Probate Property Sales in Prince William County VA', description: 'Licensed agent Dan White handles probate sales across Prince William County — attorneys, as-is, fast close.', url: 'https://www.woodbridgehomeoptions.com/sell-house-probate-prince-william-county' },
};
export default async function PWCProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-house-probate-prince-william-county', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'Selling a <em>Probate</em> Property in Prince William County',
    heroSub: 'Probate sales happen across Prince William County regularly — in Woodbridge, Dale City, Manassas, and every community in between. The process follows Virginia estate law and is more manageable than most executors and heirs expect, especially with a buyer committed before legal clearance.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Probate sales coordinated with attorneys', 'Buy as-is — full of belongings, no cleanout'],
    faqs: [
      { q: 'How does probate work for real estate in Prince William County?', a: 'The estate is filed with the Prince William County Circuit Court. An executor or administrator is appointed with authority to sell. Proceeds flow through the estate before distribution to heirs.' },
      { q: 'Can I sell a Prince William County probate property before probate closes?', a: 'We can market the property and commit a buyer before probate closes — so the sale happens immediately after legal clearance rather than starting the process afterward.' },
      { q: 'What areas of Prince William County do you handle probate sales?', a: 'All of it — Woodbridge, Dale City, Manassas, Lake Ridge, Gainesville, Haymarket, Dumfries, Montclair, Occoquan, Triangle, Nokesville, and Manassas Park.' },
      { q: 'Can the probate property be sold as-is across all of Prince William County?', a: 'Yes — no cleanout, no repairs, no preparation required anywhere in the county. Buyers are fully prepared for estate condition.' },
      { q: 'What if there are multiple heirs who disagree about selling?', a: 'All heirs with ownership interest need to agree or a court can order the sale. I can coordinate with all parties and attorneys before court involvement.' },
      { q: 'How fast can you close on a probate property anywhere in Prince William County?', a: 'Cash closings run 14-21 days from legal clearance. We commit buyers beforehand so closing happens immediately after approval.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
