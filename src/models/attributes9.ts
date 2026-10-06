import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { launchpadDetailsSchema, type LaunchpadDetails } from "./launchpad-details.js";
import { volumeUsd1Schema, type VolumeUsd1 } from "./volume-usd1.js";

export type Attributes9 = {
  /** Token contract address */
  address: string;
  /** Token name */
  name: string;
  /** Token symbol */
  symbol: string;
  /** Token decimals */
  decimals: number;
  /** Token image URL */
  imageUrl: string | null;
  /** CoinGecko coin ID */
  coingeckoCoinId: string | null;
  /** Token total supply */
  totalSupply: string;
  /** Normalized token total supply */
  normalizedTotalSupply: string;
  /** Token price in USD */
  priceUsd: string | null;
  /** Fully diluted valuation in USD */
  fdvUsd: string | null;
  /** Total reserve in USD across all pools */
  totalReserveInUsd: string;
  /** Volume in USD */
  volumeUsd: VolumeUsd1;
  /** Market cap in USD */
  marketCapUsd: string | null;
  /** Last trade timestamp in UNIX */
  lastTradeTimestamp?: string;
  /** Launchpad details for pump-style tokens */
  launchpadDetails?: LaunchpadDetails;
};

export const attributes9Schema: Schema<Attributes9> = s.object<Attributes9>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.int(),
  imageUrl: s.nullable(s.string()),
  coingeckoCoinId: s.nullable(s.string()),
  totalSupply: s.string(),
  normalizedTotalSupply: s.string(),
  priceUsd: s.nullable(s.string()),
  fdvUsd: s.nullable(s.string()),
  totalReserveInUsd: s.string(),
  volumeUsd: volumeUsd1Schema,
  marketCapUsd: s.nullable(s.string()),
  lastTradeTimestamp: s.optional(s.string()),
  launchpadDetails: s.optional(s.lazy(() => launchpadDetailsSchema)),
  _keysMap: {
    imageUrl: "image_url",
    coingeckoCoinId: "coingecko_coin_id",
    totalSupply: "total_supply",
    normalizedTotalSupply: "normalized_total_supply",
    priceUsd: "price_usd",
    fdvUsd: "fdv_usd",
    totalReserveInUsd: "total_reserve_in_usd",
    volumeUsd: "volume_usd",
    marketCapUsd: "market_cap_usd",
    lastTradeTimestamp: "last_trade_timestamp",
    launchpadDetails: "launchpad_details",
  },
});
