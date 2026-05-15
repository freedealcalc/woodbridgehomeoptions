import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Behind on Mortgage Payments in Woodbridge VA — Your Options | Dan White',
  description: 'Behind on mortgage payments in Woodbridge? Dan White shows you every path — before foreclosure starts. Fast close, protect your credit. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-house-behind-payments-woodbridge-va' },
  openGraph: { title: 'Behind on Mortgage Payments in Woodbridge VA', description: 'Don\'t wait for foreclosure — licensed agent Dan White explains every option while you still have them.', url: 'https://www.woodbridgehomeoptions.com/sell-house-behind-payments-woodbridge-va' },
};
export default async function WoodbridgeBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-house-behind-payments-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Behind on Payments in <em>Woodbridge</em> — Act Before Your Options Narrow',
    heroSub: 'Being behind on mortgage payments in Prince William County is more common than most homeowners realize — and more recoverable than most fear. The key is acting before the lender files a Notice of Default. Once that happens, your timeline shrinks fast.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Pre-foreclosure sales handled urgently', 'Act fast — options narrow with time'],
    faqs: [
      { q: 'How many payments can I miss before foreclosure starts in Virginia?', a: 'Typically lenders begin foreclosure proceedings after 3-4 missed payments. Virginia is a non-judicial state — the process moves quickly once it starts. Acting before a Notice of Default is filed keeps your options open.' },
      { q: 'Can I sell my Woodbridge home if I\'m behind on payments?', a: 'Yes — and selling is often the best option. A fast sale pays off the mortgage, stops the foreclosure process before it starts, and protects your credit from a foreclosure record.' },
      { q: 'What if I\'ve already received a foreclosure notice?', a: 'You can still sell up until the auction date. Tell me where you are in the process and I\'ll tell you how much time you have and what\'s still possible.' },
      { q: 'What if I owe more than my home is worth?', a: 'A short sale may be an option — your lender agrees to accept less than the full balance. It\'s not ideal but far better for your credit than foreclosure.' },
      { q: 'How fast can you close if I\'m behind on payments?', a: 'Cash closings run 14-21 days. For urgent situations approaching an auction date, we\'ve closed faster. Tell me your situation and I\'ll give you a realistic assessment.' },
      { q: 'Will selling hurt my credit?', a: 'Selling before foreclosure — even in a distressed sale — causes far less credit damage than a completed foreclosure. Protecting your credit is one of the main reasons to act now.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
