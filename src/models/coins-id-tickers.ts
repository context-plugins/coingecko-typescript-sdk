import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tickerSchema, type Ticker } from "./ticker.js";

export type CoinsIdTickers = {
  /** Coin name */
  name: string;
  /** List of tickers */
  tickers: Ticker[];
};

export const coinsIdTickersSchema: Schema<CoinsIdTickers> = s.object<CoinsIdTickers>({
  name: s.string(),
  tickers: s.array(s.lazy(() => tickerSchema)),
});
