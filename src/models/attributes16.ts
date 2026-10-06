import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes16 = {
  /** Token prices keyed by contract address */
  tokenPrices: Record<string, string>;
  /** Market cap in USD keyed by contract address */
  marketCapUsd?: Record<string, string>;
  /** 24hr volume in USD keyed by contract address */
  h24VolumeUsd?: Record<string, string>;
  /** 24hr price change percentage keyed by contract address */
  h24PriceChangePercentage?: Record<string, string>;
  /** Total reserve in USD keyed by contract address */
  totalReserveInUsd?: Record<string, string>;
  /** Last trade timestamp keyed by contract address */
  lastTradeTimestamp?: Record<string, string>;
};

export const attributes16Schema: Schema<Attributes16> = s.object<Attributes16>({
  tokenPrices: s.record(s.string(), s.string()),
  marketCapUsd: s.optional(s.record(s.string(), s.string())),
  h24VolumeUsd: s.optional(s.record(s.string(), s.string())),
  h24PriceChangePercentage: s.optional(s.record(s.string(), s.string())),
  totalReserveInUsd: s.optional(s.record(s.string(), s.string())),
  lastTradeTimestamp: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    tokenPrices: "token_prices",
    marketCapUsd: "market_cap_usd",
    h24VolumeUsd: "h24_volume_usd",
    h24PriceChangePercentage: "h24_price_change_percentage",
    totalReserveInUsd: "total_reserve_in_usd",
    lastTradeTimestamp: "last_trade_timestamp",
  },
});
