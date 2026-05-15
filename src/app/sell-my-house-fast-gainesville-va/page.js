import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Gainesville, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Gainesville, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-gainesville-va' },
  openGraph: { title: 'Sell My House Fast in Gainesville, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-gainesville-va' },
};
export default async function GainesvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Gainesville', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-gainesville-va', city: 'Gainesville', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Gainesville</em> Home Fast — All Five Options',
    heroSub: 'Gainesville has grown into one of the most desirable communities in western Prince William County — newer construction, strong appreciation, and an investor market that recognizes the value. Whether you need to move quickly or have a property that needs work, there are real options here.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Is Gainesville a strong market for fast sales?', a: 'Yes — Gainesville\'s growth corridor and strong appreciation make it attractive to both retail buyers and investors. Properties here move quickly when priced right.' },
      { q: 'What areas does Gainesville cover?', a: 'Gainesville includes communities near Rt. 29, the Gainesville/Haymarket corridor, and portions of western Prince William County. New construction and established neighborhoods both have active markets.' },
      { q: 'How fast can I close in Gainesville?', a: 'Cash closings typically run 14-21 days. Gainesville\'s strong demand means competitive deals move fast.' },
      { q: 'Can I sell my Gainesville home as-is?', a: 'Absolutely — even in newer communities investors target homes that need work. You don\'t need to repair or stage anything.' },
      { q: 'What if I\'m relocating from Gainesville for work?', a: 'Relocation is one of the most common reasons sellers contact us. We can structure closings around your move date and coordinate remote signing if needed.' },
      { q: 'Is listing as-is on the MLS worth it in Gainesville?', a: 'Often yes — Gainesville has strong retail buyer demand. Multiple offers on as-is listings are common, which frequently beats a single off-market cash offer.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
