import { s, type Schema } from "../core/index.js";

export type Roi = {
  times?: number;
  currency?: string;
  percentage?: number;
};

export const roiSchema: Schema<Roi> = s.object<Roi>({
  times: s.optional(s.number()),
  currency: s.optional(s.string()),
  percentage: s.optional(s.number()),
});
