import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Woodbridge Home with Code Violations | Dan White',
  description: 'Have code violations on your Woodbridge home? Dan White connects sellers with investors who buy as-is — no repairs required before closing. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-code-violations-woodbridge-va' },
  openGraph: { title: 'Selling a Woodbridge Home with Code Violations', description: 'Code violations don\'t stop your sale — licensed agent Dan White explains how investors handle them in Woodbridge.', url: 'https://www.woodbridgehomeoptions.com/sell-house-code-violations-woodbridge-va' },
};
export default async function WoodbridgeCodeViolationsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-code-violations-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Woodbridge</em> Home with Code Violations — You Don\'t Have to Fix Them First',
    heroSub: 'Code violations in Woodbridge — unpermitted additions, open permits, safety issues — don\'t have to stop a sale. Investors who work Prince William County buy properties with open violations regularly and resolve them after closing. You sell as-is.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Code violation properties handled regularly', 'Investors who buy as-is regardless'],
    faqs: [
      { q: 'Can I sell my Woodbridge home if Prince William County has open code violations?', a: 'Yes — code violations don\'t prevent a sale. Investors buy as-is with open violations and handle remediation after closing.' },
      { q: 'What are the most common code violations in Woodbridge and Dale City?', a: 'Unpermitted additions or conversions, open building permits, electrical issues, structural concerns, and zoning violations are most common in this market.' },
      { q: 'Do I have to disclose code violations to buyers?', a: 'Yes — Virginia requires disclosure of known material defects. As a licensed agent I\'ll guide you through what needs to be disclosed and how to handle it properly.' },
      { q: 'Will code violations significantly lower my sale price in Woodbridge?', a: 'Buyers discount for the estimated cost of remediation. The discount is usually less than what you\'d spend resolving complex violations yourself.' },
      { q: 'Can I list on the MLS with code violations in Woodbridge?', a: 'Yes — with proper disclosure. Investor buyers on the MLS are comfortable with disclosed violations in this market.' },
      { q: 'How fast can you close on a Woodbridge home with code violations?', a: 'Cash closings run 14-21 days. Investors experienced with code violations move quickly.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
