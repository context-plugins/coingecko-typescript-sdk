import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Return on investment data */
export type Roi2 = {
  /** ROI multiplier */
  times?: number;
  /** ROI currency */
  currency?: string;
  /** ROI percentage */
  percentage?: number;
};

export const roi2Schema: Schema<Roi2> = s.object<Roi2>({
  times: s.optional(s.float64()),
  currency: s.optional(s.string()),
  percentage: s.optional(s.float64()),
});
