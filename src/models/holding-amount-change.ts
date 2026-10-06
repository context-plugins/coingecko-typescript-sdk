import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Holding amount changes over different timeframes */
export type HoldingAmountChange = {
  D7?: number;
  D14?: number;
  D30?: number;
  D90?: number;
  Y1?: number;
  ytd?: number;
};

export const holdingAmountChangeSchema: Schema<HoldingAmountChange> = s.object<HoldingAmountChange>({
  D7: s.optional(s.float64()),
  D14: s.optional(s.float64()),
  D30: s.optional(s.float64()),
  D90: s.optional(s.float64()),
  Y1: s.optional(s.float64()),
  ytd: s.optional(s.float64()),
  _keysMap: {
    D7: "7d",
    D14: "14d",
    D30: "30d",
    D90: "90d",
    Y1: "1y",
  },
});
