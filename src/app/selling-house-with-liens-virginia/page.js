import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a House With Liens in Virginia — What You Need to Know',
  description: 'A licensed NoVA agent explains how different types of liens affect a Virginia home sale, how they\'re resolved at closing, and when you need to negotiate before listing.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/selling-house-with-liens-virginia' },
  openGraph: { title: 'Selling a House With Liens in Virginia', description: 'How to sell a Virginia home with liens — IRS, HOA, judgment, mechanic\'s liens explained.', url: 'https://www.woodbridgehomeoptions.com/selling-house-with-liens-virginia' },
};
export default function SellingHouseWithLiensVirginiaPage() {
  const config = {
    slug: 'selling-house-with-liens-virginia',
    type: 'blog',
    h1: 'Selling a House With Liens in Virginia — What You Need to Know',
    heroSub: 'Most liens don\'t prevent a sale — they get resolved at closing from the proceeds. Understanding what you owe, the priority of each lien, and what you\'ll net is the key to navigating a lien-encumbered sale successfully.',
    trustItems: ['20+ years in Northern Virginia real estate', 'Licensed VA real estate agent', 'Lien situations handled regularly', 'Clear title coordinated through settlement'],
    bodyContent: `
      <h2>The Key Concept: Liens Are Paid at Closing</h2>
      <p>In most cases, liens don't prevent you from selling your home — they get paid off at closing from the sale proceeds, and the buyer receives clear title. The title company identifies all liens during the title search, contacts each lienholder for a payoff amount, and pays them at closing. What's left after all liens and closing costs are paid is what goes to you.</p>

      <h2>Types of Liens and How They're Handled</h2>
      <h3>Mortgage Liens</h3>
      <p>The most common lien. Your first mortgage is paid off at closing from proceeds. If you have a second mortgage or home equity line, those are paid in order of priority. Straightforward.</p>

      <h3>IRS Federal Tax Liens</h3>
      <p>Federal tax liens filed by the IRS attach to all real property you own. They must be paid at closing for the buyer to receive clear title. If the IRS lien exceeds your equity, the IRS can sometimes negotiate a "discharge" of the lien from the specific property while keeping it attached to other assets. This requires direct negotiation with the IRS and time — act early.</p>

      <h3>Virginia State Tax Liens</h3>
      <p>Similar to federal tax liens but filed by the Virginia Department of Taxation. Paid at closing from proceeds.</p>

      <h3>Property Tax Delinquency</h3>
      <p>Unpaid Prince William County property taxes are a lien on the property. Paid at closing. If property taxes are significantly delinquent and the county has initiated a tax sale process, act before the sale date.</p>

      <h3>HOA Liens</h3>
      <p>Unpaid HOA assessments become a lien in Virginia. Paid at closing. Won't prevent the sale in most cases.</p>

      <h3>Judgment Liens</h3>
      <p>A court judgment against you can become a lien on your Virginia real property when it's recorded with the circuit court. Paid at closing from proceeds. If you have multiple judgment liens, the title company will identify all of them during the title search.</p>

      <h3>Mechanic's Liens</h3>
      <p>Contractors or suppliers who weren't paid for work on your property can file a mechanic's lien in Virginia within 90 days of the last day of work. Paid at closing or negotiated before closing.</p>

      <h2>What If the Liens Exceed the Sale Price?</h2>
      <p>If all liens combined exceed what the property will sell for, you won't be able to close a standard sale without bringing cash to closing or negotiating payoff discounts. Lien negotiation — particularly with the IRS or judgment creditors — can sometimes reduce the total required payoff. A short sale (with the first mortgage lender's approval) may be necessary if you're significantly underwater.</p>

      <h2>The Title Search Process</h2>
      <p>The title company conducts a thorough search before closing. All liens are identified. Payoff amounts are requested from each lienholder. At closing, the settlement statement shows every lien payoff and what you'll net. There are no surprises at closing if you've reviewed the preliminary title report in advance.</p>
    `,
    faqs: [
      { q: 'Can I sell my Virginia home if it has multiple liens?', a: 'Yes — liens are paid at closing from sale proceeds in priority order. Multiple liens don\'t prevent a sale unless they exceed the sale price.' },
      { q: 'How does the title company handle liens when I sell in Virginia?', a: 'The title company conducts a lien search, gets payoff amounts from each lienholder, pays them at closing, and issues clear title to the buyer.' },
      { q: 'What if an IRS tax lien exceeds my equity?', a: 'The IRS can sometimes issue a "discharge" of the lien from the specific property. This requires negotiation and time — work with a tax professional early.' },
      { q: 'Do I need to pay off liens before listing my Virginia home?', a: 'Usually no — liens are paid at closing. Exceptions include mechanic\'s liens where the amount is disputed and IRS liens that need discharge negotiations.' },
      { q: 'Will buyers know about liens on my Virginia property?', a: 'Yes — the title search reveals all liens. Buyers see a clean title commitment once liens are identified for payoff. Trying to hide liens creates significant legal liability.' },
    ],
  };
  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
