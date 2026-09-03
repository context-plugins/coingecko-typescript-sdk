import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConvertedVolume4 = {
  btc?: string;
  eth?: string;
  usd?: string;
};

export const convertedVolume4Schema: Schema<ConvertedVolume4> = s.object<ConvertedVolume4>({
  btc: s.optional(s.string()),
  eth: s.optional(s.string()),
  usd: s.optional(s.string()),
});
