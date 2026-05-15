import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Tired Landlord — Sell Your Dale City Rental Property | Dan White',
  description: 'Done being a landlord in Dale City? Dan White helps tired landlords exit cleanly — tenants in place or vacant, any condition. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-dale-city-va' },
  openGraph: { title: 'Tired Landlord — Sell Your Dale City Rental', description: 'Licensed agent Dan White helps Dale City landlords exit cleanly — tenants in place, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-dale-city-va' },
};
export default async function DaleCityTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Dale City', 'Prince William County');
  const config = {
    slug: 'sell-house-tired-landlord-dale-city-va', city: 'Dale City', county: 'Prince William County', type: 'city',
    h1: 'Done Being a Landlord in <em>Dale City</em>? Here\'s Your Exit',
    heroSub: 'Dale City has one of the highest rental property concentrations in Prince William County — and a lot of tired landlords who are ready to be done. Problem tenants, deferred maintenance, non-payment. There\'s a clean exit path that doesn\'t require eviction first.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Tenant-occupied sales handled regularly', 'Sell with tenants in place — no eviction needed'],
    faqs: [
      { q: 'Can I sell my Dale City rental with tenants still in place?', a: 'Yes — investors in Prince William County buy tenant-occupied properties regularly. The tenant situation transfers to the new owner at closing.' },
      { q: 'What if my Dale City tenants are behind on rent or difficult?', a: 'Problem tenants are one of the most common reasons Dale City landlords sell. Investors buy with full knowledge of tenant status — it doesn\'t kill deals.' },
      { q: 'Can I sell my Dale City rental as-is with deferred maintenance?', a: 'Absolutely — rental properties are almost always sold as-is in this market. Deferred maintenance is expected and priced in.' },
      { q: 'Is it better to sell tenant-occupied or vacant in Dale City?', a: 'Sometimes vacant produces a higher price on the MLS. Other times tenant-occupied off-market is faster and cleaner. I\'ll give you an honest comparison for your situation.' },
      { q: 'How fast can you close on a Dale City rental property?', a: 'Cash closings on tenant-occupied properties run 14-21 days. We coordinate access and work around lease terms.' },
      { q: 'What if I have multiple rental properties in Dale City?', a: 'Portfolio sales are handled regularly. Selling multiple properties in one transaction can be structured efficiently — tell me what you have.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
