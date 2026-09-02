import { s, type Schema } from "../core/index.js";

export type ConvertedVolume = {
  btc?: number;
  eth?: number;
  usd?: number;
};

export const convertedVolumeSchema: Schema<ConvertedVolume> = s.object<ConvertedVolume>({
  btc: s.optional(s.number()),
  eth: s.optional(s.number()),
  usd: s.optional(s.number()),
});
