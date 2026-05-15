import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Manassas Home with Code Violations | Dan White',
  description: 'Have code violations on your Manassas property? Dan White connects sellers with buyers who purchase as-is — no repairs required. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-code-violations-manassas-va' },
  openGraph: { title: 'Selling a Manassas Home with Code Violations', description: 'Licensed agent Dan White connects Manassas sellers with investors who buy homes with code violations as-is.', url: 'https://www.woodbridgehomeoptions.com/sell-house-code-violations-manassas-va' },
};
export default async function ManassasCodeViolationsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-code-violations-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Manassas</em> Home with Code Violations — You Don\'t Have to Fix Them First',
    heroSub: 'Code violations on a Manassas property — unpermitted work, safety issues, zoning violations — feel like they stop a sale. They don\'t. Investors who work this market specifically buy properties with open violations and resolve them after closing. You sell as-is.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Code violation properties handled regularly', 'Investors who buy as-is regardless'],
    faqs: [
      { q: 'Can I sell my Manassas home if it has code violations?', a: 'Yes — code violations don\'t prevent a sale. Investors in Prince William County regularly buy properties with open violations and handle remediation after closing.' },
      { q: 'What types of code violations are most common in Manassas?', a: 'Unpermitted additions, electrical issues, structural deficiencies, zoning violations, and open building permits are the most common. None of these prevent an as-is sale.' },
      { q: 'Do I have to disclose code violations to buyers in Virginia?', a: 'Yes — Virginia requires disclosure of known material defects. As a licensed agent I\'ll guide you through what needs to be disclosed and how.' },
      { q: 'Will code violations affect my sale price?', a: 'Buyers will price in the cost of remediation. The discount is usually less than what you\'d spend fixing the violations yourself — especially on complex code issues.' },
      { q: 'Can I list a Manassas home with code violations on the MLS?', a: 'Yes — with proper disclosure. As-is MLS listings with disclosed violations are common in this market. Investors and informed retail buyers both participate.' },
      { q: 'How fast can you close on a Manassas home with code violations?', a: 'Cash closings run 14-21 days. Investors experienced with code violations move quickly — they\'ve seen it all before.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
