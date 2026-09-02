import { s, type Schema } from "../core/index.js";
import { tickerSchema, type Ticker } from "./ticker.js";

export type CoinsIdTickers = {
  name: string;
  tickers: Ticker[];
};

export const coinsIdTickersSchema: Schema<CoinsIdTickers> = s.object<CoinsIdTickers>({
  name: s.string(),
  tickers: s.array(s.lazy(() => tickerSchema)),
});
