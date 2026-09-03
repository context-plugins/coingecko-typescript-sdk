import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Holders = {
  count?: number;
  distributionPercentage?: Record<string, string>;
  lastUpdated?: string;
};

export const holdersSchema: Schema<Holders> = s.object<Holders>({
  count: s.optional(s.number()),
  distributionPercentage: s.optional(s.record(s.string(), s.string())),
  lastUpdated: s.optional(s.string()),
  _keysMap: {
    distributionPercentage: "distribution_percentage",
    lastUpdated: "last_updated",
  },
});
