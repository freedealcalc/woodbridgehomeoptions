import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast Near Quantico, VA | PCS & Military Sales — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Quantico area, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-quantico-va' },
  openGraph: { title: 'Sell My House Fast Near Quantico, VA', description: 'PCS orders? All five options from a licensed agent who works the Quantico corridor regularly.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-quantico-va' },
};
export default async function QuanticoPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Quantico', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-quantico-va', city: 'Quantico', county: 'Prince William County', type: 'city',
    h1: 'PCS from <em>Quantico</em>? Sell Your Home Fast — All Five Options',
    heroSub: 'Quantico Marine Base drives more motivated seller activity per square mile than almost anywhere in Prince William County. PCS orders, deployment schedules, and military life create a constant need to sell fast — and the buyer market around Quantico knows it. There are real options here that protect your equity.',
    trustItems: ['20+ years in the Quantico corridor', 'Licensed VA real estate agent', 'PCS timelines handled regularly', 'VA loan expertise built in'],
    faqs: [
      { q: 'How do I sell my home near Quantico on a PCS timeline?', a: 'PCS timelines are something we handle constantly in this corridor. We can structure closings around your reporting date, arrange rent-back agreements if you need time, and handle remote signing when you\'ve already reported.' },
      { q: 'What happens to my VA loan when I sell?', a: 'Your VA loan entitlement is restored when you sell and pay off the balance. If you\'re selling at a loss or underwater, we\'ll walk through your options including short sale assistance.' },
      { q: 'Can I sell near Quantico if my home needs repairs?', a: 'Absolutely — investors who work the Quantico corridor buy homes in any condition. Military families often don\'t have time to fix things before a PCS. That\'s fine.' },
      { q: 'How fast can I close near Quantico?', a: 'Cash closings typically run 14-21 days. For urgent PCS situations we\'ve closed in under 10 days when needed.' },
      { q: 'What if I\'m already at my new duty station?', a: 'Remote sales are something we handle regularly. Everything can be done digitally — no need to travel back for closing.' },
      { q: 'Is listing as-is on the MLS an option near Quantico?', a: 'Yes — and often the best financial outcome. The military corridor drives both investor and retail demand for as-is properties. Multiple offers are common.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
