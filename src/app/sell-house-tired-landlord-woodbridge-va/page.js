import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Tired Landlord — Sell Your Woodbridge Rental Property | Dan White',
  description: 'Done being a landlord in Woodbridge? Dan White shows tired landlords every exit path — with tenants in place or vacant, any condition. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-woodbridge-va' },
  openGraph: { title: 'Tired Landlord — Sell Your Woodbridge Rental', description: 'Licensed agent Dan White helps Woodbridge landlords exit cleanly — tenants in place, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-woodbridge-va' },
};
export default async function WoodbridgeTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-tired-landlord-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Done Being a Landlord in <em>Woodbridge</em>? Here\'s Your Exit',
    heroSub: 'Woodbridge and Prince William County have one of the highest concentrations of rental properties in Northern Virginia — and some of the most exhausted landlords. Problem tenants, deferred maintenance, rent collection headaches. If you\'re ready to be done, there\'s a clean path out without the hassle of eviction first.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Tenant-occupied sales handled regularly', 'Sell with tenants in place — no eviction needed'],
    faqs: [
      { q: 'Can I sell my Woodbridge rental property with tenants still in it?', a: 'Yes — investors in Prince William County buy tenant-occupied properties regularly. You don\'t need to evict first or wait for leases to expire. The tenant situation transfers to the new owner.' },
      { q: 'What if my tenants are behind on rent or causing problems?', a: 'Problem tenants are one of the most common reasons landlords sell in this market. Investors are experienced with these situations and buy with full knowledge of the tenant status.' },
      { q: 'Do I have to disclose tenant issues to buyers?', a: 'As a licensed agent I\'ll guide you through Virginia disclosure requirements. Problem tenants don\'t kill deals — buyers price them in.' },
      { q: 'Can I sell my Woodbridge rental as-is?', a: 'Absolutely — deferred maintenance, needed repairs, and worn condition are all standard for rental properties. Buyers expect it and price accordingly.' },
      { q: 'Is it better to list my rental on the MLS or sell off-market?', a: 'Tenant-occupied properties sometimes do better off-market to avoid tenant disruption from showings. I\'ll give you an honest assessment of both paths for your specific situation.' },
      { q: 'How fast can you close on a rental property in Woodbridge?', a: 'Cash closings on tenant-occupied properties typically run 14-21 days. We\'ll work around lease terms and tenant access requirements.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
