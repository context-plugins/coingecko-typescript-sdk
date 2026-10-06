import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rates = {
  /** Currency name */
  name: string;
  /** Currency unit symbol */
  unit: string;
  /** Exchange rate value relative to BTC */
  value: number;
  /** Currency type: crypto, fiat, or commodity */
  type: string;
};

export const ratesSchema: Schema<Rates> = s.object<Rates>({
  name: s.string(),
  unit: s.string(),
  value: s.float64(),
  type: s.string(),
});
