import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Taxes on Selling an Inherited House in Virginia',
  description: 'A licensed NoVA agent explains the step-up in basis, capital gains rules, and what taxes Virginia heirs actually owe when selling inherited property.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/selling-inherited-house-taxes-virginia' },
  openGraph: { title: 'Taxes on Selling an Inherited House in Virginia', description: 'What taxes do Virginia heirs owe when selling inherited property? Step-up basis explained.', url: 'https://www.woodbridgehomeoptions.com/selling-inherited-house-taxes-virginia' },
};
export default function InheritedHouseTaxesVirginiaPage() {
  const config = {
    slug: 'selling-inherited-house-taxes-virginia',
    type: 'blog',
    h1: 'Taxes on Selling an Inherited House in Virginia — What Heirs Actually Owe',
    heroSub: 'The tax situation on inherited property is frequently misunderstood — and usually better than heirs fear. The step-up in basis rule means you typically owe capital gains only on appreciation since you inherited the property, not since the original purchase.',
    trustItems: ['20+ years in Northern Virginia real estate', 'Licensed VA real estate agent', 'Always recommend consulting a CPA', 'Inherited property sales handled regularly'],
    bodyContent: `
      <h2>The Step-Up in Basis — The Key Concept</h2>
      <p>When you inherit property, your cost basis for tax purposes is "stepped up" to the fair market value of the property on the date of the deceased's death. This is the most important tax concept for inherited property sellers.</p>
      <p>Example: Your parent bought a home in Dale City in 1985 for $120,000. When they passed away in 2024, it was worth $480,000. Your basis is $480,000 — not $120,000. If you sell it six months later for $495,000, you owe capital gains only on $15,000, not $375,000.</p>

      <h2>Capital Gains Tax on Inherited Virginia Property</h2>
      <p>Because of the step-up in basis, many heirs who sell quickly after inheriting owe little or no capital gains tax. The key variables are: how much the property appreciated between the date of death and your sale date, and how long you held it before selling.</p>
      <p>Properties sold within 12 months of inheritance are taxed at long-term capital gains rates (0%, 15%, or 20% depending on your income) — not the higher short-term rates. This is an important exception to the normal holding period rules.</p>

      <h2>Virginia State Taxes on Inherited Property</h2>
      <p>Virginia does not have an estate tax or inheritance tax. The state also follows the federal step-up in basis rules. Virginia capital gains are taxed as ordinary income at the state level, up to 5.75% for most taxpayers.</p>

      <h2>What About the Primary Residence Exclusion?</h2>
      <p>The $250,000/$500,000 primary residence exclusion requires that you lived in the home for at least 2 of the last 5 years. As an heir who never lived in the inherited property, this exclusion typically doesn't apply. However, if you moved into the inherited home and lived there for 2 years before selling, you could potentially claim it.</p>

      <h2>IRS Reporting Requirements</h2>
      <p>The sale of inherited property is reported on Schedule D of your federal tax return. You'll need the date-of-death value (often from the estate appraisal or a CMA) to establish your basis. Consult a CPA for your specific situation — this is not an area to navigate alone.</p>

      <h2>Key Practical Points for Prince William County Heirs</h2>
      <p>Get a market value assessment as close to the date of death as possible — this establishes your step-up basis. Keep records of any improvements made to the property between inheritance and sale — these can increase your basis. And sell sooner rather than later if you're not planning to occupy the property — appreciation after inheritance is taxable.</p>
    `,
    faqs: [
      { q: 'Do I pay capital gains on the full value when I sell an inherited Virginia home?', a: 'No — you pay capital gains only on appreciation since the date of inheritance, not the original purchase price. The step-up in basis rule eliminates most of the historical gain.' },
      { q: 'Does Virginia have an inheritance tax?', a: 'No — Virginia has no estate tax or inheritance tax. The only taxes are federal and state capital gains on any appreciation since the date of death.' },
      { q: 'How is the basis determined when I inherit a Virginia home?', a: 'Your basis is the fair market value of the property on the date of the deceased\'s death. This is typically established through an appraisal or a CMA from a licensed agent.' },
      { q: 'What are the capital gains rates on inherited property in Virginia?', a: 'Federal long-term capital gains rates apply (0%, 15%, or 20% depending on income). Virginia taxes the gain as ordinary income at up to 5.75%.' },
      { q: 'Should I consult a CPA before selling inherited property in Virginia?', a: 'Yes — always. Tax situations vary based on estate structure, holding period, and individual income. A CPA familiar with Virginia estate sales is worth the consultation fee.' },
    ],
  };
  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
