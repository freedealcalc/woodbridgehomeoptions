import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Capital Gains Tax When Selling a House in Virginia',
  description: 'A licensed NoVA agent explains the primary residence exclusion, capital gains rates, and how Virginia taxes home sale profits — with real examples from the Northern Virginia market.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/capital-gains-tax-selling-house-virginia' },
  openGraph: { title: 'Capital Gains Tax When Selling a House in Virginia', description: 'Primary residence exclusion, capital gains rates, and Virginia state taxes on home sales — explained clearly.', url: 'https://www.woodbridgehomeoptions.com/capital-gains-tax-selling-house-virginia' },
};
export default function CapitalGainsTaxSellingHouseVirginiaPage() {
  const config = {
    slug: 'capital-gains-tax-selling-house-virginia',
    type: 'blog',
    h1: 'Capital Gains Tax When Selling a House in Virginia',
    heroSub: 'Most Northern Virginia homeowners who sell their primary residence owe little or no capital gains tax — thanks to the primary residence exclusion. Here\'s how it works, when it doesn\'t apply, and what Virginia charges on top.',
    trustItems: ['20+ years in Northern Virginia real estate', 'Licensed VA real estate agent', 'Always recommend consulting a CPA', 'Real examples from the NoVA market'],
    bodyContent: `
      <h2>The Primary Residence Exclusion — The Most Important Rule</h2>
      <p>Federal tax law allows homeowners to exclude up to $250,000 in capital gains from the sale of a primary residence ($500,000 for married couples filing jointly). To qualify, you must have owned and lived in the home for at least 2 of the last 5 years before the sale.</p>
      <p>Example: You bought a Woodbridge home in 2018 for $320,000 and sell it in 2026 for $520,000. Your gain is $200,000. As a single filer, the $250,000 exclusion covers the entire gain — you owe zero federal capital gains tax. As a married couple, the $500,000 exclusion covers it easily.</p>

      <h2>When the Exclusion Doesn't Apply</h2>
      <p>You don't qualify if you haven't lived in the home for 2 of the last 5 years. This includes: investment properties you never lived in, homes sold too soon after purchase, and homes used primarily as rentals. For Northern Virginia investors selling rental properties, the full capital gain is taxable.</p>

      <h2>Federal Capital Gains Rates</h2>
      <p>If you owe capital gains (gain exceeds the exclusion, or you don't qualify for the exclusion), the rate depends on your income and how long you held the property:</p>
      <p>Long-term capital gains (held more than 1 year): 0%, 15%, or 20% depending on taxable income. Most middle-income homeowners pay 15%.</p>
      <p>Short-term capital gains (held 1 year or less): taxed as ordinary income — the same rate as your regular income tax bracket. This is why selling quickly after purchase is generally taxed more heavily.</p>

      <h2>Virginia State Capital Gains Tax</h2>
      <p>Virginia taxes capital gains as ordinary income at the state level. Virginia's income tax rate is 5.75% for taxable income over $17,000. For most Northern Virginia homeowners, any taxable capital gain is subject to the 5.75% Virginia rate on top of the federal rate.</p>

      <h2>Net Investment Income Tax (NIIT)</h2>
      <p>High-income earners ($200,000 single, $250,000 married) may also owe the 3.8% Net Investment Income Tax on capital gains. This applies to investment properties and to primary residence gains that exceed the exclusion amount.</p>

      <h2>Northern Virginia Context</h2>
      <p>Homes in Woodbridge, Dale City, Manassas, and surrounding areas have appreciated significantly over the past decade. Long-term owners who qualify for the primary residence exclusion are largely shielded from capital gains. Recent buyers or investors without the exclusion may face meaningful tax bills on the appreciation Northern Virginia has produced. A CPA consultation before selling is worth every dollar of the fee.</p>
    `,
    faqs: [
      { q: 'Do I pay capital gains tax when selling my Virginia home?', a: 'Most primary residence sellers don\'t — the $250K/$500K exclusion covers most gains for homeowners who\'ve lived in the property 2+ years.' },
      { q: 'What is the capital gains tax rate on Virginia home sales?', a: 'Federal: 0%, 15%, or 20% long-term depending on income. Virginia state: 5.75% as ordinary income. Total federal + state for most: around 20%.' },
      { q: 'Do I qualify for the primary residence exclusion in Virginia?', a: 'If you\'ve owned and lived in the home as your primary residence for at least 2 of the last 5 years, you likely qualify.' },
      { q: 'How is capital gains calculated on a Virginia home sale?', a: 'Sale price minus your cost basis (purchase price plus improvements) equals the gain. Subtract the applicable exclusion. The remainder is taxable.' },
      { q: 'Should I consult a CPA before selling my Northern Virginia home?', a: 'Yes — especially if you\'re selling an investment property, have significant gains, or have any complications with the 2-of-5-year rule.' },
    ],
  };
  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
