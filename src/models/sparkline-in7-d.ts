import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sparkline price data for the last 7 days */
export type SparklineIn7D = {
  /** Array of price values */
  price?: number[];
};

export const sparklineIn7DSchema: Schema<SparklineIn7D> = s.object<SparklineIn7D>({
  price: s.optional(s.array(s.float64())),
});
