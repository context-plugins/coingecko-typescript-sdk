import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DerivativesTicker = {
  /** Derivative market name */
  market: string;
  /** Derivative ticker symbol */
  symbol: string;
  /** Derivative underlying asset */
  indexId: string;
  /** Derivative ticker price */
  price: string;
  /** Derivative ticker price percentage change in 24 hours */
  pricePercentageChange24H: number;
  /** Derivative contract type */
  contractType: string;
  /** Derivative underlying asset price */
  index: number;
  /** Difference of derivative price and index price */
  basis: number;
  /** Derivative bid-ask spread */
  spread: number;
  /** Derivative funding rate */
  fundingRate: number;
  /** Derivative open interest */
  openInterest: number;
  /** Derivative trading volume in 24 hours */
  volume24H: number;
  /** Derivative last traded time in UNIX timestamp */
  lastTradedAt: number;
  /** Derivative expiry time in UNIX timestamp */
  expiredAt: number | null;
};

export const derivativesTickerSchema: Schema<DerivativesTicker> = s.object<DerivativesTicker>({
  market: s.string(),
  symbol: s.string(),
  indexId: s.string(),
  price: s.string(),
  pricePercentageChange24H: s.float64(),
  contractType: s.string(),
  index: s.float64(),
  basis: s.float64(),
  spread: s.float64(),
  fundingRate: s.float64(),
  openInterest: s.float64(),
  volume24H: s.float64(),
  lastTradedAt: s.float64(),
  expiredAt: s.nullable(s.float64()),
  _keysMap: {
    indexId: "index_id",
    pricePercentageChange24H: "price_percentage_change_24h",
    contractType: "contract_type",
    fundingRate: "funding_rate",
    openInterest: "open_interest",
    volume24H: "volume_24h",
    lastTradedAt: "last_traded_at",
    expiredAt: "expired_at",
  },
});
