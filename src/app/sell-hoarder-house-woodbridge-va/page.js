import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';
export const revalidate = 2592000;
export const metadata = {
  title: 'Selling a Hoarder House in Woodbridge VA | Dan White',
  description: 'Have a hoarder house in Woodbridge VA? Dan White connects sellers with investors who buy hoarder properties as-is — full of belongings, no cleanout required. Free consultation.',
  alternates: { canonical: 'https://www.woodbridgehomeoptions.com/sell-hoarder-house-woodbridge-va' },
  openGraph: { title: 'Selling a Hoarder House in Woodbridge VA', description: 'Licensed agent Dan White connects Woodbridge sellers with investors who buy hoarder homes as-is — no cleanout.', url: 'https://www.woodbridgehomeoptions.com/sell-hoarder-house-woodbridge-va' },
};
export default async function WoodbridgeHoarderPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Woodbridge', 'Prince William County');
  const config = {
    slug: 'sell-hoarder-house-woodbridge-va', city: 'Woodbridge', county: 'Prince William County', type: 'city',
    h1: 'Selling a <em>Hoarder House</em> in Woodbridge — You Don\'t Have to Clean It Out',
    heroSub: 'Hoarder properties in Woodbridge and Prince William County sell regularly — full of belongings, no cleanout required. Investors who buy these properties have specialized crews who handle everything after closing. You walk away without touching a single item.',
    trustItems: ['20+ years in Prince William County', 'Licensed VA real estate agent', 'Hoarder properties handled with discretion', 'Buy as-is — full of belongings, leave everything'],
    faqs: [
      { q: 'Do I have to clean out a hoarder house before selling in Woodbridge?', a: 'No — investors who buy hoarder properties specifically include cleanout costs in their offer. You leave everything and they handle it after closing.' },
      { q: 'Will anyone buy a hoarder house in Woodbridge as-is?', a: 'Yes — there\'s a specific investor profile that targets hoarder properties. They have the crews, the experience, and the pricing models for these situations.' },
      { q: 'How do buyers determine what to pay for a hoarder property?', a: 'Buyers estimate the cleanup cost, any structural or systems issues hidden by clutter, and the post-renovation value. The offer reflects all of that — you don\'t absorb the cleanup cost yourself.' },
      { q: 'Is the situation handled with discretion?', a: 'Completely — hoarder situations are handled with professionalism and without judgment. This is a situation I\'ve seen many times across Prince William County.' },
      { q: 'What if the hoarder property is an inherited estate?', a: 'Very common situation. Heirs are almost never expected to clean out an estate-condition hoarder property. Buyers buy it exactly as it is.' },
      { q: 'How fast can you close on a hoarder property in Woodbridge?', a: 'Cash closings run 14-21 days. No cleanout or repairs needed before closing.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
