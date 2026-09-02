import { s, type Schema } from "../core/index.js";

export type Exchange1 = {
  id: string;
  name: string;
  yearEstablished: number | null;
  country: string | null;
  description: string;
  url: string;
  image: string;
  hasTradingIncentive: boolean;
  trustScore: number | null;
  trustScoreRank: number | null;
  tradeVolume24HBtc: number;
};

export const exchange1Schema: Schema<Exchange1> = s.object<Exchange1>({
  id: s.string(),
  name: s.string(),
  yearEstablished: s.nullable(s.number()),
  country: s.nullable(s.string()),
  description: s.string(),
  url: s.string(),
  image: s.string(),
  hasTradingIncentive: s.boolean(),
  trustScore: s.nullable(s.number()),
  trustScoreRank: s.nullable(s.number()),
  tradeVolume24HBtc: s.number(),
  _keysMap: {
    yearEstablished: "year_established",
    hasTradingIncentive: "has_trading_incentive",
    trustScore: "trust_score",
    trustScoreRank: "trust_score_rank",
    tradeVolume24HBtc: "trade_volume_24h_btc",
  },
});
