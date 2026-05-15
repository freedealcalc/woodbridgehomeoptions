import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Behind on Mortgage Payments in Manassas VA — Your Options | Dan White',
  description: 'Behind on mortgage payments in Manassas? Dan White shows you every option before foreclosure starts. Fast close, protect your credit. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-behind-payments-manassas-va' },
  openGraph: { title: 'Behind on Mortgage Payments in Manassas VA', description: 'Don\'t wait — licensed agent Dan White explains every option while you still have them.', url: 'https://www.woodbridgehomeoptions.com/sell-house-behind-payments-manassas-va' },
};
export default async function ManassasBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
  const config = {
    slug: 'sell-house-behind-payments-manassas-va', city: 'Manassas', county: 'Prince William County', type: 'city',
    h1: 'Behind on Payments in <em>Manassas</em> — Act Before Your Options Narrow',
    heroSub: 'Being behind on mortgage payments in Manassas is stressful — but it\'s more common and more recoverable than most homeowners realize. The critical thing is acting before your lender files a Notice of Default. After that, your timeline compresses fast.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Pre-foreclosure sales handled urgently', 'Act fast — options narrow with time'],
    faqs: [
      { q: 'How many payments can I miss in Manassas before foreclosure starts?', a: 'Typically lenders begin foreclosure after 3-4 missed payments. Virginia\'s non-judicial process moves quickly once started — acting before a Notice of Default preserves your options.' },
      { q: 'Can selling stop the foreclosure process in Manassas?', a: 'Yes — a fast sale pays off the mortgage before the auction date and stops foreclosure entirely. Your credit takes far less damage than a completed foreclosure.' },
      { q: 'Is Manassas a strong enough market to sell quickly when behind on payments?', a: 'Yes — Manassas has active investor demand and properties move quickly at competitive pricing. Being behind on payments doesn\'t weaken your position with buyers.' },
      { q: 'What if I owe more than my Manassas home is worth?', a: 'A short sale may be possible — your lender accepts less than the full payoff. It\'s not ideal but far better than foreclosure on your record for 7 years.' },
      { q: 'How fast can you close if I\'m behind on payments in Manassas?', a: 'Cash closings run 14-21 days. For urgent situations, tell me where you are in the process and I\'ll give you a realistic assessment of what\'s possible.' },
      { q: 'Do I need to fix anything before selling when behind on payments?', a: 'Never — buyers buy as-is regardless of the financial situation. No judgment attached to any of it.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
