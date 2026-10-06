import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { convertedLast4Schema, type ConvertedLast4 } from "./converted-last4.js";
import { convertedVolume4Schema, type ConvertedVolume4 } from "./converted-volume4.js";

export type Ticker4 = {
  /** Derivative ticker symbol */
  symbol: string;
  /** Derivative base asset */
  base: string;
  /** Derivative target asset */
  target: string;
  /** Derivative base asset coin ID */
  coinId: string;
  /** Derivative target asset coin ID */
  targetCoinId: string;
  /** Derivative trade URL */
  tradeUrl: string;
  /** Derivative contract type */
  contractType: string;
  /** Derivative last price */
  last: number;
  /** Derivative price percentage change in 24 hours */
  h24PercentageChange: number;
  /** Derivative underlying asset price */
  index: number;
  /** Difference of derivative price and index price in percentage */
  indexBasisPercentage: number;
  /** Derivative bid-ask spread */
  bidAskSpread: number;
  /** Derivative funding rate */
  fundingRate: number;
  /** Derivative open interest in USD */
  openInterestUsd: number;
  /** Derivative volume in 24 hours */
  h24Volume: number;
  /** Derivative converted volume */
  convertedVolume: ConvertedVolume4;
  /** Derivative converted last price */
  convertedLast: ConvertedLast4;
  /** Derivative last traded time in UNIX timestamp */
  lastTraded: number;
  /** Derivative expiry time in UNIX timestamp */
  expiredAt: number | null;
};

export const ticker4Schema: Schema<Ticker4> = s.object<Ticker4>({
  symbol: s.string(),
  base: s.string(),
  target: s.string(),
  coinId: s.string(),
  targetCoinId: s.string(),
  tradeUrl: s.string(),
  contractType: s.string(),
  last: s.float64(),
  h24PercentageChange: s.float64(),
  index: s.float64(),
  indexBasisPercentage: s.float64(),
  bidAskSpread: s.float64(),
  fundingRate: s.float64(),
  openInterestUsd: s.float64(),
  h24Volume: s.float64(),
  convertedVolume: convertedVolume4Schema,
  convertedLast: convertedLast4Schema,
  lastTraded: s.float64(),
  expiredAt: s.nullable(s.float64()),
  _keysMap: {
    coinId: "coin_id",
    targetCoinId: "target_coin_id",
    tradeUrl: "trade_url",
    contractType: "contract_type",
    h24PercentageChange: "h24_percentage_change",
    indexBasisPercentage: "index_basis_percentage",
    bidAskSpread: "bid_ask_spread",
    fundingRate: "funding_rate",
    openInterestUsd: "open_interest_usd",
    h24Volume: "h24_volume",
    convertedVolume: "converted_volume",
    convertedLast: "converted_last",
    lastTraded: "last_traded",
    expiredAt: "expired_at",
  },
});
