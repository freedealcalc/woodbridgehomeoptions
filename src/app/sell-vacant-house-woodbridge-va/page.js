import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Vacant Property in Woodbridge VA | Dan White',
  description: 'Have a vacant property in Woodbridge VA? Dan White explains the risks of holding and how to sell fast — as-is, any condition. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-vacant-house-woodbridge-va' },
  openGraph: { title: 'Selling a Vacant Property in Woodbridge VA', description: 'Licensed agent Dan White helps Woodbridge sellers move vacant properties fast — before holding costs add up.', url: 'https://www.woodbridgehomeoptions.com/sell-vacant-house-woodbridge-va' },
};
export default async function WoodbridgeVacantPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-vacant-house-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Vacant</em> Property in Woodbridge — Stop the Bleeding',
    heroSub: 'A vacant property in Woodbridge or Prince William County costs money every month — insurance, taxes, utilities, maintenance, and the risk of vandalism or squatters. The faster it sells, the better. Buyers in this market move quickly on vacant properties.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Vacant property sales handled regularly', 'Buy as-is — no cleanup required'],
    faqs: [
      { q: 'Why should I sell my vacant Woodbridge property quickly?', a: 'Vacant properties accumulate costs fast — carrying costs, insurance premiums (higher for vacant homes), deferred maintenance, and the very real risk of vandalism, squatters, or code violations. Every month costs money.' },
      { q: 'Can I sell a vacant Woodbridge property as-is?', a: 'Absolutely — vacant properties are sold as-is in this market constantly. No cleanup, no repairs, no staging required.' },
      { q: 'What if my vacant property has been vandalized or has squatters?', a: 'Both situations are handled regularly. Buyers who work this market are experienced with distressed vacant properties and price accordingly.' },
      { q: 'Is a cash sale or MLS listing better for a vacant Woodbridge property?', a: 'Depends on the condition. Well-maintained vacant properties can list on MLS effectively. Distressed vacant properties typically do better off-market with investor buyers.' },
      { q: 'How fast can you close on a vacant property in Woodbridge?', a: 'Cash closings run 14-21 days. Vacant properties are actually faster to close in some ways — no tenant coordination, easier access.' },
      { q: 'What if the vacant property is an inherited estate?', a: 'Very common situation in Prince William County. We handle the full process including probate coordination and as-is marketing.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
