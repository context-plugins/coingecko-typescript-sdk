import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data = {
  /** Number of active cryptocurrencies */
  activeCryptocurrencies: number;
  /** Number of upcoming ICOs */
  upcomingIcos: number;
  /** Number of ongoing ICOs */
  ongoingIcos: number;
  /** Number of ended ICOs */
  endedIcos: number;
  /** Number of exchanges */
  markets: number;
  /** Total cryptocurrency market cap by currency */
  totalMarketCap: Record<string, number>;
  /** Total cryptocurrency volume by currency */
  totalVolume: Record<string, number>;
  /** Market cap percentage by coin */
  marketCapPercentage: Record<string, number>;
  /** Market cap change percentage in 24 hours in USD */
  marketCapChangePercentage24HUsd: number;
  /** Volume change percentage in 24 hours in USD */
  volumeChangePercentage24HUsd: number;
  /** Last updated time in UNIX timestamp */
  updatedAt: number;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  activeCryptocurrencies: s.int(),
  upcomingIcos: s.int(),
  ongoingIcos: s.int(),
  endedIcos: s.int(),
  markets: s.int(),
  totalMarketCap: s.record(s.string(), s.float64()),
  totalVolume: s.record(s.string(), s.float64()),
  marketCapPercentage: s.record(s.string(), s.float64()),
  marketCapChangePercentage24HUsd: s.float64(),
  volumeChangePercentage24HUsd: s.float64(),
  updatedAt: s.int(),
  _keysMap: {
    activeCryptocurrencies: "active_cryptocurrencies",
    upcomingIcos: "upcoming_icos",
    ongoingIcos: "ongoing_icos",
    endedIcos: "ended_icos",
    totalMarketCap: "total_market_cap",
    totalVolume: "total_volume",
    marketCapPercentage: "market_cap_percentage",
    marketCapChangePercentage24HUsd: "market_cap_change_percentage_24h_usd",
    volumeChangePercentage24HUsd: "volume_change_percentage_24h_usd",
    updatedAt: "updated_at",
  },
});
