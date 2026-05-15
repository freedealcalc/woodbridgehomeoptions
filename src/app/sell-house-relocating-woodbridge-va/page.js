import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Relocating from Woodbridge — Sell Your Home Fast | Dan White',
  description: 'Relocating from Woodbridge and need to sell fast? Dan White shows you every path — on your timeline, remote closing available. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-relocating-woodbridge-va' },
  openGraph: { title: 'Relocating from Woodbridge — Sell Your Home Fast', description: 'Licensed agent Dan White handles relocation sales in Prince William County on your timeline.', url: 'https://www.woodbridgehomeoptions.com/sell-house-relocating-woodbridge-va' },
};
export default async function WoodbridgeRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-relocating-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Relocating from <em>Woodbridge</em> — Sell on Your Timeline',
    heroSub: 'Woodbridge is a high-turnover market — job transfers, federal government relocations, contractor moves, and military reassignments create a steady stream of sellers who need to move fast. Whether your start date is 30 days out or 90, there\'s a path that protects your equity and hits your timeline.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Relocation sales handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'Can I sell my Woodbridge home fast if I\'m relocating for work?', a: 'Yes — relocation is one of the most common reasons sellers contact us. We build the sale strategy around your start date, not the other way around.' },
      { q: 'What if I\'ve already relocated and need to sell remotely?', a: 'Remote sales are handled regularly. Offer review, negotiation, and closing can all be done digitally. You don\'t need to come back to Woodbridge.' },
      { q: 'Is a cash sale or MLS listing better for a relocation?', a: 'Depends on your timeline. Cash sale closes in 14-21 days with certainty. As-is MLS listing may produce more money but takes 30-45 days. Tell me your start date and I\'ll give you an honest recommendation.' },
      { q: 'What if my employer has a relocation package — how does that work?', a: 'Some relocation packages include a buyout program. If yours does, compare what the buyout offers versus what you\'d net on the open market. I\'ll help you do the math.' },
      { q: 'Can I get a rent-back if I need to stay after closing?', a: 'Yes — rent-back agreements are common in relocation situations. Close on the sale, collect proceeds, and remain in the home for an agreed period while your new situation finalizes.' },
      { q: 'Do I need to make repairs before selling if I\'m relocating?', a: 'Never — buyers in this market buy as-is. Relocation sellers don\'t have time to manage renovations and they don\'t need to.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
