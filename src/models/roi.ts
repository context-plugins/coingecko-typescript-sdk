import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Return on investment */
export type Roi = {
  /** ROI multiplier */
  times?: number;
  /** ROI currency */
  currency?: string;
  /** ROI percentage */
  percentage?: number;
};

export const roiSchema: Schema<Roi> = s.object<Roi>({
  times: s.optional(s.float64()),
  currency: s.optional(s.string()),
  percentage: s.optional(s.float64()),
});
