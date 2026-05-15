import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Sell My House Fast in Nokesville, VA | All Options — Dan White',
  description: 'Think selling fast means leaving money on the table? Think again. Dan White shows Nokesville, VA sellers every path — and which one puts the most cash in your pocket. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-nokesville-va' },
  openGraph: { title: 'Sell My House Fast in Nokesville, VA', description: 'All five options from a licensed agent — not just one cash offer. Free consultation, no pressure.', url: 'https://www.woodbridgehomeoptions.com/sell-my-house-fast-nokesville-va' },
};
export default async function NokesvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Nokesville', 'Prince William County');
  const config = {
    slug: 'sell-my-house-fast-nokesville-va', city: 'Nokesville', county: 'Prince William County', type: 'city',
    h1: 'Sell Your <em>Nokesville</em> Home Fast — All Five Options',
    heroSub: 'Nokesville sits in the rural heart of Prince William County — larger lots, older properties, and agricultural land that attracts a specific investor profile. Whether you\'re dealing with an estate, a property that needs work, or land you\'re ready to sell, there\'s a real market here.',
    trustItems: ['20+ years fixing & flipping in Prince William', 'Licensed VA real estate agent', 'Pearson Smith Realty, NoVA', 'Buy as-is — no repairs, no cleaning'],
    faqs: [
      { q: 'Do investors buy rural properties in Nokesville?', a: 'Yes — investors who work western Prince William County specifically target larger lot and rural properties in Nokesville. Land value and development potential drive strong interest.' },
      { q: 'Can I sell a property with acreage or outbuildings in Nokesville?', a: 'Absolutely — larger properties with land, barns, or outbuildings attract buyers who specifically seek that profile. These are not a disadvantage.' },
      { q: 'How fast can I sell in Nokesville?', a: 'Cash closings typically run 14-21 days. The rural buyer pool is smaller than urban markets but very motivated when the right property comes available.' },
      { q: 'What if my Nokesville property has a well and septic?', a: 'Very common in this area and not a problem. Investors price in well and septic systems — they don\'t walk away from rural properties because of them.' },
      { q: 'Can I sell an inherited farm or estate property in Nokesville?', a: 'Yes — estate and farm property sales are common in Nokesville. We handle the full process including probate coordination and as-is marketing.' },
      { q: 'Is listing as-is on the MLS worth it in Nokesville?', a: 'It depends on the property. Rural properties sometimes do better off-market with targeted investor outreach. We\'ll give you an honest assessment of both paths.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
