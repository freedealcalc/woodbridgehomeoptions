import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling Rental Property in Prince William County VA | Dan White',
  description: 'Done being a landlord in Prince William County? Dan White helps tired landlords exit cleanly across PWC — tenants in place or vacant, any condition. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-rental-property-prince-william-county' },
  openGraph: { title: 'Selling Rental Property in Prince William County VA', description: 'Licensed agent Dan White helps Prince William County landlords exit cleanly — tenants in place, any condition.', url: 'https://www.woodbridgehomeoptions.com/sell-rental-property-prince-william-county' },
};
export default async function PWCRentalPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Prince William', 'Prince William County');
  const config = {
    slug: 'sell-rental-property-prince-william-county', city: 'Prince William County', county: 'Prince William County', type: 'county',
    h1: 'Selling Rental Property in <em>Prince William County</em> — Your Exit Options',
    heroSub: 'Prince William County has one of the largest concentrations of rental properties in Northern Virginia — and some of the most exhausted landlords. From Woodbridge to Manassas to Dale City, tired landlords find a clean exit path here without the drama of eviction first.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Tenant-occupied sales handled county-wide', 'Sell with tenants in place — no eviction needed'],
    faqs: [
      { q: 'Can I sell my Prince William County rental with tenants in place?', a: 'Yes — investors across the county buy tenant-occupied properties regularly. The tenant situation transfers at closing.' },
      { q: 'What if my tenants are difficult or behind on rent?', a: 'Problem tenants are the most common reason landlords sell across Prince William County. Investors are very experienced with this and buy with full knowledge.' },
      { q: 'What areas of Prince William County do you handle rental sales?', a: 'All of it — Woodbridge, Dale City, Manassas, Lake Ridge, Gainesville, Haymarket, Dumfries, Montclair, and everywhere in between.' },
      { q: 'Can I sell my rental property as-is with deferred maintenance?', a: 'Absolutely — rental condition is expected and priced in. You don\'t need to repair or renovate anything before selling.' },
      { q: 'What if I have multiple rental properties across Prince William County?', a: 'Portfolio sales are handled regularly. Multiple properties can be sold in one structured transaction — tell me what you have and we\'ll map out the best approach.' },
      { q: 'How fast can you close on rental properties in Prince William County?', a: 'Cash closings on tenant-occupied properties run 14-21 days. We coordinate access and work around lease terms across all communities.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
