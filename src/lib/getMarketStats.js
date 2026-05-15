/**
 * lib/getMarketStats.js
 *
 * Server-side data fetching for Redfin market stats.
 * Used by page.js files (Next.js App Router server components).
 *
 * Usage:
 *   const { stats, lastCronRun } = await getMarketStats('city', 'Manassas', 'Prince William County');
 *
 * NOTE: region_name in Supabase is stored as "Fairfax, VA" not just "Fairfax"
 * The helper normalizes the name automatically.
 */
import { createClient } from '@supabase/supabase-js';

function getServerSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

// Normalize region name — Supabase stores "Fairfax, VA" not "Fairfax"
function normalizeName(name) {
  if (!name) return name
  // Already has state suffix
  if (name.includes(', VA') || name.includes(', Virginia')) return name
  // County names
  if (name.includes('County')) return `${name}, VA`
  // City names
  return `${name}, VA`
}

export async function getMarketStats(regionType, regionName, fallbackCounty = null) {
  const supabase = getServerSupabase();

  try {
    const normalizedName = normalizeName(regionName)

    // Primary query — no state filter (state is baked into region_name)
    const { data: rows, error } = await supabase
      .from('redfin_market_stats')
      .select('*')
      .eq('region_type', regionType)
      .eq('region_name', normalizedName)
      .order('period', { ascending: false })
      .limit(1);

    if (error) console.error('[getMarketStats] Primary query error:', error.message)

    let stats = rows?.[0] || null;

    // County fallback if city data missing
    if (!stats && fallbackCounty) {
      const normalizedCounty = normalizeName(fallbackCounty)
      const { data: countyRows } = await supabase
        .from('redfin_market_stats')
        .select('*')
        .eq('region_type', 'county')
        .eq('region_name', normalizedCounty)
        .order('period', { ascending: false })
        .limit(1);

      stats = countyRows?.[0] || null;
      if (stats) {
        stats._fallback = true;
        stats._fallbackSource = fallbackCounty;
      }
    }

    // Get last cron run timestamp from site_metadata if it exists
    let lastCronRun = null
    try {
      const { data: meta } = await supabase
        .from('site_metadata')
        .select('value')
        .eq('key', 'last_redfin_cron')
        .single();
      lastCronRun = meta?.value || null;
    } catch {}

    // Use updated_at from the stats row as fallback for lastCronRun
    if (!lastCronRun && stats?.updated_at) {
      lastCronRun = stats.updated_at
    }

    return { stats, lastCronRun };

  } catch (err) {
    console.error('[getMarketStats] Error:', err.message);
    return { stats: null, lastCronRun: null };
  }
}

export async function getMarketHistory(regionName, months = 12) {
  const supabase = getServerSupabase();
  try {
    const normalizedName = normalizeName(regionName)
    const { data: rows } = await supabase
      .from('redfin_market_stats')
      .select('period, median_price, homes_sold, median_dom, pct_above_list')
      .eq('region_name', normalizedName)
      .order('period', { ascending: false })
      .limit(months);
    return rows || [];
  } catch {
    return [];
  }
}
