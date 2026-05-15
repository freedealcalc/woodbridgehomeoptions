import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Manassas Home with Tax Liens | Dan White',
  description: 'Have tax liens on your Manassas home? Dan White shows sellers how liens are resolved at closing — not before. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-tax-lien-manassas-va' },
  openGraph: { title: 'Selling a Manassas Home with Tax Liens', description: 'Tax liens don\'t stop your sale — licensed agent Dan White explains how they\'re handled at closing in Manassas.', url: 'https://www.woodbridgehomeoptions.com/sell-house-tax-lien-manassas-va' },
};
export default async function ManassasTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-tax-lien-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Manassas</em> Home with Tax Liens — What You Need to Know',
    heroSub: 'Tax liens on a Manassas property feel like a barrier to selling — but in most cases they\'re paid off at closing from the proceeds. You don\'t need to resolve them before listing. The title company handles the payoff and issues clear title to the buyer.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Liens resolved at closing — not before', 'Clear title coordinated through settlement'],
    faqs: [
      { q: 'Can I sell my Manassas home if it has tax liens on it?', a: 'Yes — tax liens attach to the property and are paid off at closing from your sale proceeds. They don\'t prevent the sale, they just get resolved through settlement.' },
      { q: 'What kinds of tax liens appear on Manassas properties?', a: 'The most common are IRS federal tax liens, Virginia state tax liens, and Prince William County property tax delinquencies. All are handled at closing.' },
      { q: 'What if the liens exceed what my Manassas home is worth?', a: 'If total liens exceed your sale price, short sale or lien negotiation may be necessary. I\'ve worked through these situations — we\'ll map out what you actually owe versus what\'s realistic.' },
      { q: 'Do I need to disclose tax liens to buyers in Virginia?', a: 'Yes — Virginia disclosure requirements apply. As a licensed agent I\'ll walk you through exactly what needs to be disclosed and when.' },
      { q: 'Can I sell my Manassas home as-is if it has liens?', a: 'Absolutely — condition and liens are completely separate issues. Investors buy as-is regardless of lien status.' },
      { q: 'How fast can you close on a Manassas home with tax liens?', a: 'Cash closings typically run 14-21 days once lien payoff amounts are confirmed through the title company.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
