import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ticker4Schema, type Ticker4 } from "./ticker4.js";

export type DerivativesExchangesId = {
  name: string;
  openInterestBtc: number | null;
  tradeVolume24HBtc: string;
  numberOfPerpetualPairs: number;
  numberOfFuturesPairs: number;
  image: string;
  yearEstablished: number | null;
  country: string | null;
  description: string;
  url: string;
  tickers?: Ticker4[];
};

export const derivativesExchangesIdSchema: Schema<DerivativesExchangesId> = s.object<DerivativesExchangesId>({
  name: s.string(),
  openInterestBtc: s.nullable(s.number()),
  tradeVolume24HBtc: s.string(),
  numberOfPerpetualPairs: s.number(),
  numberOfFuturesPairs: s.number(),
  image: s.string(),
  yearEstablished: s.nullable(s.number()),
  country: s.nullable(s.string()),
  description: s.string(),
  url: s.string(),
  tickers: s.optional(s.array(s.lazy(() => ticker4Schema))),
  _keysMap: {
    openInterestBtc: "open_interest_btc",
    tradeVolume24HBtc: "trade_volume_24h_btc",
    numberOfPerpetualPairs: "number_of_perpetual_pairs",
    numberOfFuturesPairs: "number_of_futures_pairs",
    yearEstablished: "year_established",
  },
});
