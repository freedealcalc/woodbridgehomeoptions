import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'PCS Orders — Sell Your Dale City Home Fast | Dan White',
  description: 'PCS orders and need to sell your Dale City home fast? Dan White handles military PCS sales on your timeline — Quantico corridor specialist. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-dale-city-va' },
  openGraph: { title: 'PCS Orders — Sell Your Dale City Home Fast', description: 'Licensed agent Dan White handles Dale City PCS sales on military timelines — 15 minutes from Quantico.', url: 'https://www.woodbridgehomeoptions.com/sell-house-pcs-dale-city-va' },
};
export default async function DaleCityPCSPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-house-pcs-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'PCS from <em>Dale City</em> — Sell Fast, Keep Your Equity',
    heroSub: 'Dale City sits 15 minutes north of Quantico Marine Base — making it one of the most active PCS markets in Prince William County. Military families buy and sell here constantly. When your orders come through, the market can move as fast as your timeline requires.',
    trustItems: ['20+ years in the Quantico corridor', 'Licensed VA real estate agent', 'PCS sales handled routinely', 'Remote and digital closing available'],
    faqs: [
      { q: 'How do I sell my Dale City home quickly on PCS orders?', a: 'We start with your reporting date. Cash sale closes in 14-21 days with certainty. As-is MLS listing may produce more money in 30-45 days if your timeline allows.' },
      { q: 'What if I\'ve already left Dale City for my new duty station?', a: 'Remote sales are fully manageable from anywhere. Everything can be handled digitally — no need to return.' },
      { q: 'Should I sell or rent my Dale City home when I PCS?', a: 'Most service members who rent their Dale City home while at a distant duty station regret it. Distance management in an active rental market is a real burden. I\'ll give you an honest equity comparison.' },
      { q: 'Can I do a rent-back after closing in Dale City?', a: 'Yes — rent-back agreements are available for PCS sellers who need time after closing.' },
      { q: 'What happens to my VA entitlement when I sell?', a: 'Full VA loan entitlement is restored when you sell and pay off the balance — important if you\'re planning to buy at your new station with a VA loan.' },
      { q: 'How fast can you close in Dale City for a PCS situation?', a: 'Cash closings run 14-21 days. For urgent PCS situations we\'ve closed faster. Tell me your reporting date.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
