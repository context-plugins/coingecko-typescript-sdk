import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Token holder information */
export type Holders = {
  /** Number of holders */
  count?: number;
  /** Holder distribution percentage (keys vary by chain, e.g. top_10, 11_30, 31_50, rest) */
  distributionPercentage?: Record<string, string>;
  /** Last updated timestamp */
  lastUpdated?: string;
};

export const holdersSchema: Schema<Holders> = s.object<Holders>({
  count: s.optional(s.int()),
  distributionPercentage: s.optional(s.record(s.string(), s.string())),
  lastUpdated: s.optional(s.string()),
  _keysMap: {
    distributionPercentage: "distribution_percentage",
    lastUpdated: "last_updated",
  },
});
