import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DerivativesTicker = {
  market: string;
  symbol: string;
  indexId: string;
  price: string;
  pricePercentageChange24H: number;
  contractType: string;
  index: number;
  basis: number;
  spread: number;
  fundingRate: number;
  openInterest: number;
  volume24H: number;
  lastTradedAt: number;
  expiredAt: number | null;
};

export const derivativesTickerSchema: Schema<DerivativesTicker> = s.object<DerivativesTicker>({
  market: s.string(),
  symbol: s.string(),
  indexId: s.string(),
  price: s.string(),
  pricePercentageChange24H: s.number(),
  contractType: s.string(),
  index: s.number(),
  basis: s.number(),
  spread: s.number(),
  fundingRate: s.number(),
  openInterest: s.number(),
  volume24H: s.number(),
  lastTradedAt: s.number(),
  expiredAt: s.nullable(s.number()),
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
