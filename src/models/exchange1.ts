import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchange1 = {
  /** Exchange ID */
  id: string;
  /** Exchange name */
  name: string;
  /** Year the exchange was established */
  yearEstablished: number | null;
  /** Country where the exchange is based */
  country: string | null;
  /** Exchange description */
  description: string;
  /** Exchange website URL */
  url: string;
  /** Exchange logo URL */
  image: string;
  /** Whether the exchange has trading incentive */
  hasTradingIncentive: boolean;
  /** Exchange trust score */
  trustScore: number | null;
  /** Exchange trust score rank */
  trustScoreRank: number | null;
  /** Exchange 24h trading volume in BTC */
  tradeVolume24HBtc: number;
};

export const exchange1Schema: Schema<Exchange1> = s.object<Exchange1>({
  id: s.string(),
  name: s.string(),
  yearEstablished: s.nullable(s.float64()),
  country: s.nullable(s.string()),
  description: s.string(),
  url: s.string(),
  image: s.string(),
  hasTradingIncentive: s.boolean(),
  trustScore: s.nullable(s.float64()),
  trustScoreRank: s.nullable(s.float64()),
  tradeVolume24HBtc: s.float64(),
  _keysMap: {
    yearEstablished: "year_established",
    hasTradingIncentive: "has_trading_incentive",
    trustScore: "trust_score",
    trustScoreRank: "trust_score_rank",
    tradeVolume24HBtc: "trade_volume_24h_btc",
  },
});
