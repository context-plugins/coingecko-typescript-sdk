import { s, type Schema } from "../core/index.js";

export type FloorPrice7DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice7DPercentageChangeSchema: Schema<FloorPrice7DPercentageChange> =
  s.object<FloorPrice7DPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
