import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice60DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice60DPercentageChangeSchema: Schema<FloorPrice60DPercentageChange> =
  s.object<FloorPrice60DPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
