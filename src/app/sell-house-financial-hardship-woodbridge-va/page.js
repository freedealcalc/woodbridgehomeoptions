import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Financial Hardship — Sell Your Woodbridge Home | Dan White',
  description: 'Facing financial hardship and need to sell your Woodbridge home? Dan White shows you every path — no judgment, fast close, protect what equity you have. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-financial-hardship-woodbridge-va' },
  openGraph: { title: 'Financial Hardship — Sell Your Woodbridge Home', description: 'Licensed agent Dan White helps Woodbridge homeowners in financial hardship — no judgment, all options on the table.', url: 'https://www.woodbridgehomeoptions.com/sell-house-financial-hardship-woodbridge-va' },
};
export default async function WoodbridgeFinancialHardshipPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-financial-hardship-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Financial Hardship in <em>Woodbridge</em> — No Judgment, All Options',
    heroSub: 'Financial hardship comes in many forms — job loss, medical bills, divorce, business failure. Whatever brought you here, there\'s no judgment attached to it. My job is to make sure you understand every option available and which one protects the most of what you\'ve built.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Every situation handled without judgment', 'Fast close when time matters most'],
    faqs: [
      { q: 'What options do I have if I\'m in financial hardship and need to sell my Woodbridge home?', a: 'Depending on your equity position and timeline — cash sale, as-is MLS listing, short sale, or loan modification may all be on the table. I\'ll walk you through what\'s realistic for your specific situation.' },
      { q: 'What if I\'m behind on payments and facing potential foreclosure?', a: 'Selling before foreclosure is almost always the better path — it stops the process, protects your credit, and may leave you with equity. The earlier you act, the more options you have.' },
      { q: 'What if I owe more than my Woodbridge home is worth?', a: 'A short sale may be possible — your lender accepts less than the full payoff to avoid a costly foreclosure proceeding. Far better for your credit than completing foreclosure.' },
      { q: 'Do I have to fix anything or prepare my home if I\'m in financial hardship?', a: 'Never — buyers buy as-is. Your financial situation doesn\'t affect the buyer\'s willingness to purchase in any condition.' },
      { q: 'How fast can you close if I need money urgently?', a: 'Cash closings run 14-21 days. For urgent situations we can sometimes move faster. Tell me your timeline and I\'ll tell you what\'s possible.' },
      { q: 'Is my situation confidential?', a: 'Completely — everything discussed is treated with full confidentiality. I\'ve helped homeowners through every kind of financial hardship in Prince William County without judgment.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
