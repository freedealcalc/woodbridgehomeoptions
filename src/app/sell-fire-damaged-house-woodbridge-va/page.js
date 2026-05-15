import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Fire Damaged Home in Woodbridge VA | Dan White',
  description: 'Have a fire damaged home in Woodbridge VA? Dan White connects sellers with investors who buy fire damaged properties as-is — no repairs required. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-fire-damaged-house-woodbridge-va' },
  openGraph: { title: 'Selling a Fire Damaged Home in Woodbridge VA', description: 'Licensed agent Dan White connects Woodbridge sellers with investors who buy fire damaged homes as-is.', url: 'https://www.woodbridgehomeoptions.com/sell-fire-damaged-house-woodbridge-va' },
};
export default async function WoodbridgeFireDamagedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-fire-damaged-house-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Fire Damaged</em> Home in Woodbridge — What You Need to Know',
    heroSub: 'A fire damaged property in Woodbridge doesn\'t have to become a months-long renovation project before you can sell. Investors who specifically buy fire damaged homes are active in Prince William County — they price in the remediation and buy as-is.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Fire damaged properties handled regularly', 'Investors who buy as-is regardless of damage'],
    faqs: [
      { q: 'Can I sell my fire damaged Woodbridge home without repairing it?', a: 'Yes — investors who work this market specifically seek fire damaged properties. They price in the remediation cost and buy as-is. You don\'t need to touch anything.' },
      { q: 'What if my insurance company is involved?', a: 'Insurance claims and property sales can run simultaneously. I\'ve worked with sellers navigating insurance processes while selling. Tell me where things stand and we\'ll work around it.' },
      { q: 'Do I have to disclose fire damage to buyers in Virginia?', a: 'Yes — Virginia requires disclosure of known material defects including fire damage. As a licensed agent I\'ll guide you through the disclosure requirements.' },
      { q: 'Will I get a fair price for a fire damaged Woodbridge home?', a: 'Fair means what the market pays. Investors price fire damaged properties based on repair cost and post-renovation value. You won\'t get retail — but you also won\'t have to manage a complex renovation to sell.' },
      { q: 'Is the land value still there even with a destroyed structure?', a: 'Often yes — especially in Woodbridge where land values are significant. Some buyers purchase specifically for the lot value.' },
      { q: 'How fast can you close on a fire damaged property in Woodbridge?', a: 'Cash closings run 14-21 days. Fire damaged properties are purchased as-is with no repair contingencies.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
