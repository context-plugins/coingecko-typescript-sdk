import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ticker4Schema, type Ticker4 } from "./ticker4.js";

export type DerivativesExchangesId = {
  /** Derivatives exchange name */
  name: string;
  /** Derivatives exchange open interest in BTC */
  openInterestBtc: number | null;
  /** Derivatives exchange trade volume in BTC in 24 hours */
  tradeVolume24HBtc: string;
  /** Number of perpetual pairs in the derivatives exchange */
  numberOfPerpetualPairs: number;
  /** Number of futures pairs in the derivatives exchange */
  numberOfFuturesPairs: number;
  /** Derivatives exchange image URL */
  image: string;
  /** Derivatives exchange established year */
  yearEstablished: number | null;
  /** Derivatives exchange incorporated country */
  country: string | null;
  /** Derivatives exchange description */
  description: string;
  /** Derivatives exchange website URL */
  url: string;
  /** Derivative tickers data, available when include_tickers is specified */
  tickers?: Ticker4[];
};

export const derivativesExchangesIdSchema: Schema<DerivativesExchangesId> = s.object<DerivativesExchangesId>({
  name: s.string(),
  openInterestBtc: s.nullable(s.float64()),
  tradeVolume24HBtc: s.string(),
  numberOfPerpetualPairs: s.int(),
  numberOfFuturesPairs: s.int(),
  image: s.string(),
  yearEstablished: s.nullable(s.int()),
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
