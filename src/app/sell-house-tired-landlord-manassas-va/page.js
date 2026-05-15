import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Tired Landlord — Sell Your Manassas Rental Property | Dan White',
  description: 'Done being a landlord in Manassas? Dan White shows tired landlords every exit — tenants in place or vacant, any condition. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-manassas-va' },
  openGraph: { title: 'Tired Landlord — Sell Your Manassas Rental', description: 'Licensed agent Dan White helps Manassas landlords exit cleanly — tenants in place, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-house-tired-landlord-manassas-va' },
};
export default async function ManassasTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-tired-landlord-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Done Being a Landlord in <em>Manassas</em>? Here\'s Your Exit',
    heroSub: 'Manassas has a large rental market — and some very tired landlords. Problem tenants, non-payment, deferred maintenance, the constant grind of property management. If you\'re ready to be done, there\'s a clean path out without the hassle of getting the property vacant first.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Tenant-occupied sales handled regularly', 'Sell with tenants in place — no eviction needed'],
    faqs: [
      { q: 'Can I sell my Manassas rental with tenants still living there?', a: 'Yes — investors in Prince William County buy tenant-occupied properties regularly. The tenant situation transfers to the new owner at closing.' },
      { q: 'What if my tenants are difficult, behind on rent, or destructive?', a: 'Problem tenants are one of the most common reasons Manassas landlords sell. Investors are very experienced with these situations and buy with full knowledge.' },
      { q: 'Do I have to disclose tenant issues?', a: 'As a licensed agent I\'ll walk you through Virginia disclosure requirements. Problem tenants don\'t kill deals in this market — buyers price them in.' },
      { q: 'Can I sell my Manassas rental as-is with deferred maintenance?', a: 'Absolutely — rental properties are almost always sold as-is. Investors expect wear and deferred maintenance and price accordingly.' },
      { q: 'Is it better to sell tenant-occupied or get the property vacant first?', a: 'Depends on the situation. Sometimes vacant sells for more on the open market. Other times tenant-occupied off-market is cleaner and faster. I\'ll give you an honest comparison.' },
      { q: 'How fast can you close on a Manassas rental property?', a: 'Cash closings on tenant-occupied properties run 14-21 days. We coordinate access and work around tenant schedules.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
