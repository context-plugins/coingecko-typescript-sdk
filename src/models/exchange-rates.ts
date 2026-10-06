import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ratesSchema, type Rates } from "./rates.js";

export type ExchangeRates = {
  /** Exchange rates keyed by currency code */
  rates: Record<string, Rates>;
};

export const exchangeRatesSchema: Schema<ExchangeRates> = s.object<ExchangeRates>({
  rates: s.record(
    s.string(),
    s.lazy(() => ratesSchema),
  ),
});
