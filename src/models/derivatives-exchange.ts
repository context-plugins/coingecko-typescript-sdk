import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DerivativesExchange = {
  /** Derivatives exchange name */
  name: string;
  /** Derivatives exchange ID */
  id: string;
  /** Derivatives exchange open interest in BTC */
  openInterestBtc: number;
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
};

export const derivativesExchangeSchema: Schema<DerivativesExchange> = s.object<DerivativesExchange>({
  name: s.string(),
  id: s.string(),
  openInterestBtc: s.float64(),
  tradeVolume24HBtc: s.string(),
  numberOfPerpetualPairs: s.int(),
  numberOfFuturesPairs: s.int(),
  image: s.string(),
  yearEstablished: s.nullable(s.int()),
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
