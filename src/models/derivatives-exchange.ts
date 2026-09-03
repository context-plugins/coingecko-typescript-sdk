import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DerivativesExchange = {
  name: string;
  id: string;
  openInterestBtc: number;
  tradeVolume24HBtc: string;
  numberOfPerpetualPairs: number;
  numberOfFuturesPairs: number;
  image: string;
  yearEstablished: number | null;
  country: string | null;
  description: string;
  url: string;
};

export const derivativesExchangeSchema: Schema<DerivativesExchange> = s.object<DerivativesExchange>({
  name: s.string(),
  id: s.string(),
  openInterestBtc: s.number(),
  tradeVolume24HBtc: s.string(),
  numberOfPerpetualPairs: s.number(),
  numberOfFuturesPairs: s.number(),
  image: s.string(),
  yearEstablished: s.nullable(s.number()),
  country: s.nullable(s.string()),
  description: s.string(),
  url: s.string(),
  _keysMap: {
    openInterestBtc: "open_interest_btc",
    tradeVolume24HBtc: "trade_volume_24h_btc",
    numberOfPerpetualPairs: "number_of_perpetual_pairs",
    numberOfFuturesPairs: "number_of_futures_pairs",
    yearEstablished: "year_established",
  },
});
