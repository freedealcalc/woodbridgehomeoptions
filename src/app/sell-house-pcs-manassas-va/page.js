import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'PCS Orders — Sell Your Manassas Home Fast | Dan White',
  description: 'PCS orders and need to sell your Manassas home fast? Dan White handles military PCS sales in Prince William County on your timeline. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-manassas-va' },
  openGraph: { title: 'PCS Orders — Sell Your Manassas Home Fast', description: 'Licensed agent Dan White handles Manassas PCS sales on military timelines — Quantico, Fort Belvoir, Pentagon.', url: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-manassas-va' },
};
export default async function ManassasPCSPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-pcs-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'PCS from <em>Manassas</em> — Sell Fast Without Leaving Money Behind',
    heroSub: 'Manassas sits at the intersection of major military commuter corridors — Quantico 25 minutes south, Fort Belvoir 25 minutes northeast, Pentagon 30 minutes up I-66. When orders arrive, the Manassas market moves fast enough to close on your reporting date timeline.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'PCS timelines handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'How do I sell my Manassas home on a PCS timeline?', a: 'We start with your reporting date and work backwards. The right path depends on your timeline and equity — cash sale or as-is MLS listing, both are real options in Manassas.' },
      { q: 'What if I\'ve already reported and need to sell remotely?', a: 'Remote sales are fully manageable. Everything from offer to closing can be handled digitally.' },
      { q: 'Can I get a rent-back after closing in Manassas?', a: 'Yes — rent-back agreements are common for PCS sellers who need to remain in the home for a period after closing.' },
      { q: 'Should I sell or rent my Manassas home when I PCS?', a: 'Most service members who rent regret it within 12 months. Distance landlording in a market you\'re no longer in creates real headaches. I\'ll give you an honest equity comparison.' },
      { q: 'What happens to my VA loan when I sell?', a: 'Full entitlement is restored when you sell and pay off the balance — important if you\'re buying at your new duty station with a VA loan.' },
      { q: 'How fast can you close in Manassas for a PCS move?', a: 'Cash closings run 14-21 days. For urgent situations we\'ve closed faster. Tell me your reporting date and I\'ll give you a realistic timeline.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
