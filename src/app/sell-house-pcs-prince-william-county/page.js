import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'PCS — Selling Your Prince William County Home | Dan White',
  description: 'PCS orders and need to sell your Prince William County home? Dan White handles military PCS sales across PWC on your timeline. Quantico, Fort Belvoir, Pentagon. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-prince-william-county' },
  openGraph: { title: 'PCS — Selling Your Prince William County Home', description: 'Licensed agent Dan White handles PCS sales across Prince William County — Quantico, Fort Belvoir, Pentagon corridor.', url: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-prince-william-county' },
};
export default async function PWCPCSPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-house-pcs-prince-william-county', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'PCS from <em>Prince William County</em> — Sell Fast, Keep Your Equity',
    heroSub: 'Prince William County is one of the most active military PCS markets in the entire mid-Atlantic — Quantico to the south, Fort Belvoir to the north, Pentagon up I-95, and thousands of service members cycling through Woodbridge, Dale City, Manassas, and every community in between. When orders come through, the market here is ready to move.',
    trustItems: ['20+ years in the Prince William military corridor', 'Licensed VA real estate agent', 'PCS timelines handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'What military bases are near Prince William County?', a: 'Quantico Marine Base is at the southern end of the county. Fort Belvoir is just north in Fairfax County. The Pentagon is 25-30 minutes up I-95. All three drive significant PCS activity across PWC.' },
      { q: 'How do I sell my Prince William County home on a PCS timeline?', a: 'We start with your reporting date and build the strategy from there. Cash sale closes in 14-21 days with certainty. As-is MLS may produce more in 30-45 days. Your timeline determines the right path.' },
      { q: 'What if I\'ve already reported to my new duty station?', a: 'Remote sales are handled regularly across Prince William County. Everything from offer to closing can be managed digitally.' },
      { q: 'Should I sell or rent my Prince William County home when I PCS?', a: 'Renting sounds appealing but most service members managing Prince William rentals from a distance regret it. I\'ll give you an honest equity comparison before you decide.' },
      { q: 'What happens to my VA loan entitlement when I sell?', a: 'Full entitlement is restored when you sell and pay off the balance — critical if you plan to use a VA loan at your next duty station.' },
      { q: 'Can I get a rent-back after closing in Prince William County?', a: 'Yes — rent-back agreements are standard for PCS sellers who need time after closing before their new situation is ready.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
