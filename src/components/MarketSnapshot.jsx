'use client';

/**
 * components/MarketSnapshot.jsx
 *
 * Displays Redfin market stats for a given region.
 * Navy/amber design matching VHO design system.
 *
 * Key behavior:
 * - DOM YoY is INVERTED: lower days on market is BETTER for sellers
 *   (down arrow = green, up arrow = red — opposite of price/volume)
 * - Graceful fallbacks: never shows $NaN or blank stats
 * - dateModified updates with each cron run
 *
 * Props:
 *   stats        {object}  — row from redfin_market_stats, or null if loading
 *   regionName   {string}  — e.g., 'Manassas' (for fallback copy)
 *   lastUpdated  {string}  — ISO timestamp of last cron run (for dateModified)
 *   isLoading    {boolean}
 */

import { useState } from 'react';
import styles from './MarketSnapshot.module.css';

// ── Formatting helpers ──────────────────────────────────────────────────────

function formatPrice(val) {
  if (val == null || isNaN(val)) return null;
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
  if (val >= 1_000)     return `$${Math.round(val / 1_000)}K`;
  return `$${Math.round(val).toLocaleString()}`;
}

function formatYoy(val, invert = false) {
  if (val == null || isNaN(val)) return null;
  const pct = parseFloat(val);
  if (isNaN(pct)) return null;

  // For DOM: invert = true means down is good
  // For everything else: up is good (prices, volume)
  const isPositive = invert ? pct < 0 : pct > 0;
  const isNegative = invert ? pct > 0 : pct < 0;

  const sign = pct > 0 ? '+' : '';
  const arrow = pct > 0 ? '↑' : pct < 0 ? '↓' : '→';
  const color = isPositive ? 'green' : isNegative ? 'red' : 'neutral';

  return { text: `${sign}${pct.toFixed(1)}%`, arrow, color };
}

function formatMonthYear(isoDate) {
  if (!isoDate) return null;
  try {
    return new Date(isoDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch {
    return null;
  }
}

// ── Stat Card ───────────────────────────────────────────────────────────────

function StatCard({ label, value, yoyData, suffix = '', note = null }) {
  if (value == null) return null; // Hide missing stats entirely

  return (
    <div className={styles.statCard}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>
        {value}{suffix}
      </div>
      {yoyData && (
        <div className={`${styles.statYoy} ${styles[`yoy_${yoyData.color}`]}`}>
          <span>{yoyData.arrow}</span>
          <span>{yoyData.text} YoY</span>
        </div>
      )}
      {note && <div className={styles.statNote}>{note}</div>}
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function MarketSnapshot({ stats, regionName, lastUpdated, isLoading = false }) {

  const updatedLabel = formatMonthYear(stats?.period_end || lastUpdated);
  const prevMonthLabel = updatedLabel ? `as of ${updatedLabel}` : null;

  // Build stat data with fallbacks
  const medPrice    = stats?.median_sale_price;
  const medPriceYoy = formatYoy(stats?.median_sale_price_yoy, false);

  const homesSold    = stats?.homes_sold;
  const homesSoldYoy = formatYoy(stats?.homes_sold_yoy, false);

  const medDom    = stats?.median_dom;
  const medDomYoy = formatYoy(stats?.median_dom_yoy, true); // INVERTED — down is green

  const pctAbove = stats?.pct_sold_above_list;
  const pctBelow = stats?.pct_sold_below_list;
  const supply   = stats?.months_of_supply;

  // Check if we have any data at all
  const hasData = medPrice != null || homesSold != null || medDom != null;

  if (isLoading) {
    return (
      <div className={styles.wrapper} aria-busy="true">
        <div className={styles.loadingBar} />
        <div className={styles.loadingGrid}>
          {[1,2,3,4,5].map(i => (
            <div key={i} className={styles.loadingCard} />
          ))}
        </div>
      </div>
    );
  }

  if (!hasData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.noData}>
          <p>Market data for {regionName || 'this area'} is being updated. Check back shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h3 className={styles.title}>
            {regionName} Market Snapshot
          </h3>
          {updatedLabel && (
            <span className={styles.updated}>
              Data through {updatedLabel}
            </span>
          )}
        </div>
        <div className={styles.headerBadge}>Live Data</div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <StatCard
          label="Median Sale Price"
          value={formatPrice(medPrice)}
          yoyData={medPriceYoy}
        />
        <StatCard
          label="Homes Sold"
          value={homesSold != null ? homesSold.toLocaleString() : null}
          yoyData={homesSoldYoy}
        />
        <StatCard
          label="Median Days on Market"
          value={medDom != null ? `${medDom}` : null}
          suffix=" days"
          yoyData={medDomYoy}
          note="↓ lower = faster market"
        />
        <StatCard
          label="Sold Above List"
          value={pctAbove != null ? `${pctAbove.toFixed(1)}%` : null}
        />
        <StatCard
          label="Sold Below List"
          value={pctBelow != null ? `${pctBelow.toFixed(1)}%` : null}
        />
        {supply != null && (
          <StatCard
            label="Months of Supply"
            value={`${supply.toFixed(1)}`}
            suffix=" mo"
          />
        )}
      </div>

      {/* Conditional market interpretation */}
      {pctBelow != null && (
        <div className={styles.interpretation}>
          {pctBelow > 30 ? (
            <p>
              <strong>Buyer leverage is elevated:</strong> Over {Math.round(pctBelow)}% of homes in {regionName} are
              selling below list price — sellers in distressed situations face real pressure to
              accept discounted offers without an agent who knows all their options.
            </p>
          ) : pctBelow < 15 ? (
            <p>
              <strong>Market favoring sellers:</strong> Only {Math.round(pctBelow)}% of homes are selling below
              list in {regionName} — even if you're in a tough situation, you may have
              more leverage than you think. Let's walk through your options.
            </p>
          ) : (
            <p>
              <strong>Balanced conditions:</strong> {regionName} is currently a balanced market —
              sellers have room to negotiate without panic, and buyers aren't overwhelming inventory.
              Timing your sale right still matters.
            </p>
          )}
        </div>
      )}

      {/* Source attribution */}
      <div className={styles.source}>
        Source: Redfin Data Center.{updatedLabel ? ` Updated ${updatedLabel}.` : ''}
        {' '}Data reflects {regionName} residential sales.
      </div>
    </div>
  );
}
