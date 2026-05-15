import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Woodbridge Home with Tax Liens | Dan White',
  description: 'Have tax liens on your Woodbridge home? Dan White shows sellers every path — liens are resolved at closing, not before. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-tax-lien-woodbridge-va' },
  openGraph: { title: 'Selling a Woodbridge Home with Tax Liens', description: 'Tax liens don\'t have to stop your sale — licensed agent Dan White explains how they\'re handled at closing.', url: 'https://www.woodbridgehomeoptions.com/sell-house-tax-lien-woodbridge-va' },
};
export default async function WoodbridgeTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-tax-lien-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Woodbridge</em> Home with Tax Liens — It\'s More Manageable Than You Think',
    heroSub: 'Tax liens on a Prince William County property feel like a wall — but in most cases they\'re resolved at closing from the sale proceeds. You don\'t need to pay them off before listing. The key is understanding what you owe and what you\'ll net.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Liens resolved at closing — not before', 'Clear title coordinated through closing'],
    faqs: [
      { q: 'Can I sell my Woodbridge home if it has tax liens?', a: 'Yes — tax liens don\'t prevent a sale. They attach to the property and get paid off at closing from your proceeds. The title company handles the payoff and issues clear title to the buyer.' },
      { q: 'What types of tax liens are on Virginia properties?', a: 'The most common are IRS federal tax liens, Virginia state tax liens, and Prince William County property tax delinquencies. All are handled at closing through the title company.' },
      { q: 'What if the liens are more than my home is worth?', a: 'If total liens exceed your sale price, a short sale or lien negotiation may be necessary. I\'ve worked through these situations before — we\'ll map out what you actually owe and what options are realistic.' },
      { q: 'Do I need to tell buyers about tax liens?', a: 'Yes — Virginia disclosure requirements apply. As a licensed agent I\'ll walk you through what needs to be disclosed and when.' },
      { q: 'How fast can you close on a home with tax liens in Woodbridge?', a: 'Cash closings typically run 14-21 days once lien payoff amounts are confirmed. The title company coordinates everything.' },
      { q: 'Can I sell as-is with tax liens?', a: 'Absolutely — condition and liens are separate issues. Investors in Prince William County buy homes in any condition regardless of lien status.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
