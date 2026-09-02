import { s, type Schema } from "../core/index.js";
import { ratesSchema, type Rates } from "./rates.js";

export type ExchangeRates = {
  rates: Record<string, Rates>;
};

export const exchangeRatesSchema: Schema<ExchangeRates> = s.object<ExchangeRates>({
  rates: s.record(
    s.string(),
    s.lazy(() => ratesSchema),
  ),
});
