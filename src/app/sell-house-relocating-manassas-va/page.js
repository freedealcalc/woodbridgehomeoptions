import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Relocating from Manassas — Sell Your Home Fast | Dan White',
  description: 'Relocating from Manassas and need to sell fast? Dan White handles relocation sales on your timeline — remote closing available. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-relocating-manassas-va' },
  openGraph: { title: 'Relocating from Manassas — Sell Your Home Fast', description: 'Licensed agent Dan White handles Manassas relocation sales on your timeline.', url: 'https://www.woodbridgehomeoptions.com/sell-house-relocating-manassas-va' },
};
export default async function ManassasRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-relocating-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Relocating from <em>Manassas</em> — Sell on Your Timeline',
    heroSub: 'Manassas is a high-turnover market — federal government moves, contractor relocations, corporate transfers. Whether your start date is 30 days out or 90, there\'s a path that protects your equity and hits your timeline without the stress of managing a sale from a distance.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Relocation sales handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'Can I sell my Manassas home quickly if I\'m relocating?', a: 'Yes — relocation is one of the most common reasons sellers come to us. We build the entire strategy around your start date.' },
      { q: 'What if I\'ve already relocated and need to manage the sale remotely?', a: 'Fully manageable — offer, negotiation, and closing can all be handled digitally from your new location.' },
      { q: 'Is a cash sale or MLS listing better for relocation from Manassas?', a: 'Cash sale closes in 14-21 days with certainty. As-is MLS may produce more in 30-45 days. Your start date determines the right path.' },
      { q: 'Can I stay in my Manassas home after closing with a rent-back?', a: 'Yes — rent-back agreements are available for relocation sellers who need time between closing and moving.' },
      { q: 'What if my employer offers a relocation buyout program?', a: 'Compare the buyout to what you\'d net on the open market. I\'ll give you real numbers so you can make an informed decision.' },
      { q: 'Do I need to make repairs before selling if I\'m relocating from Manassas?', a: 'Never — buyers buy as-is. Relocation sellers don\'t have time for renovations and they don\'t need them.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
