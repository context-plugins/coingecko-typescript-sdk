import { s, type Schema } from "../core/index.js";
import { convertedLast4Schema, type ConvertedLast4 } from "./converted-last4.js";
import { convertedVolume4Schema, type ConvertedVolume4 } from "./converted-volume4.js";

export type Ticker4 = {
  symbol: string;
  base: string;
  target: string;
  coinId: string;
  targetCoinId: string;
  tradeUrl: string;
  contractType: string;
  last: number;
  h24PercentageChange: number;
  index: number;
  indexBasisPercentage: number;
  bidAskSpread: number;
  fundingRate: number;
  openInterestUsd: number;
  h24Volume: number;
  convertedVolume: ConvertedVolume4;
  convertedLast: ConvertedLast4;
  lastTraded: number;
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
  last: s.number(),
  h24PercentageChange: s.number(),
  index: s.number(),
  indexBasisPercentage: s.number(),
  bidAskSpread: s.number(),
  fundingRate: s.number(),
  openInterestUsd: s.number(),
  h24Volume: s.number(),
  convertedVolume: convertedVolume4Schema,
  convertedLast: convertedLast4Schema,
  lastTraded: s.number(),
  expiredAt: s.nullable(s.number()),
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
