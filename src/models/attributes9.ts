import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { launchpadDetailsSchema, type LaunchpadDetails } from "./launchpad-details.js";
import { volumeUsd1Schema, type VolumeUsd1 } from "./volume-usd1.js";

export type Attributes9 = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  imageUrl: string | null;
  coingeckoCoinId: string | null;
  totalSupply: string;
  normalizedTotalSupply: string;
  priceUsd: string | null;
  fdvUsd: string | null;
  totalReserveInUsd: string;
  volumeUsd: VolumeUsd1;
  marketCapUsd: string | null;
  lastTradeTimestamp?: string;
  launchpadDetails?: LaunchpadDetails;
};

export const attributes9Schema: Schema<Attributes9> = s.object<Attributes9>({
  address: s.string(),
  name: s.string(),
  symbol: s.string(),
  decimals: s.number(),
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
