import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Converted trading volume */
export type ConvertedVolume = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedVolumeSchema: Schema<ConvertedVolume> = s.object<ConvertedVolume>({
  btc: s.optional(s.float64()),
  eth: s.optional(s.float64()),
  usd: s.optional(s.float64()),
});
