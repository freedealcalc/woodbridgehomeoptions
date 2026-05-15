import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'PCS Orders — Sell Your Woodbridge Home Fast | Dan White',
  description: 'PCS orders and need to sell your Woodbridge home fast? Dan White handles military PCS sales in Prince William County regularly — on your timeline, remote closing available. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-woodbridge-va' },
  openGraph: { title: 'PCS Orders — Sell Your Woodbridge Home Fast', description: 'Licensed agent Dan White handles Woodbridge PCS sales on military timelines. Quantico, Fort Belvoir, Pentagon.', url: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-woodbridge-va' },
};
export default async function WoodbridgePCSPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-pcs-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'PCS Orders from <em>Woodbridge</em> — Sell Fast Without Leaving Money Behind',
    heroSub: 'Woodbridge is one of the most active PCS markets in Northern Virginia — Quantico 20 minutes south, Fort Belvoir 20 minutes north, Pentagon 25 minutes up I-95. When orders come through, the timeline is fixed. The sale strategy needs to match it.',
    trustItems: ['20+ years in the Prince William military corridor', 'Licensed VA real estate agent', 'PCS timelines handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'How do I sell my Woodbridge home quickly on a PCS timeline?', a: 'We start with your reporting date and work backwards. Cash sale, as-is MLS listing, or a combination — the right path depends on your timeline, equity position, and whether you need a rent-back period.' },
      { q: 'What if I\'ve already reported to my new duty station?', a: 'Remote sales are handled regularly. Everything from offer negotiation to closing can be done digitally — no need to travel back to Woodbridge.' },
      { q: 'Can I do a rent-back if I need to stay in the home after closing?', a: 'Yes — rent-back agreements allow you to close and collect proceeds while remaining in the home for a set period. This is common in PCS situations where school year or reporting dates create a gap.' },
      { q: 'What happens to my VA loan when I sell?', a: 'Your VA entitlement is fully restored when you sell and pay off the VA loan balance. If you\'re buying at your new duty station, this matters — we\'ll make sure the timeline works.' },
      { q: 'Is it better to sell or rent my Woodbridge home when I PCS?', a: 'Renting sounds appealing but most service members regret it — distance management, problem tenants, and deferred maintenance add up. I\'ll give you an honest comparison for your specific equity position.' },
      { q: 'How fast can you close in Woodbridge for a PCS move?', a: 'Cash closings run 14-21 days. For urgent situations we\'ve closed faster. Tell me your reporting date and I\'ll tell you exactly what\'s possible.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
