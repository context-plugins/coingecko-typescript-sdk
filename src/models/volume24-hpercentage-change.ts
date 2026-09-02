import { s, type Schema } from "../core/index.js";

export type Volume24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const volume24HPercentageChangeSchema: Schema<Volume24HPercentageChange> =
  s.object<Volume24HPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
