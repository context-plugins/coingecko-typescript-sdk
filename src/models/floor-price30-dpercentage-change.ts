import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice30DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice30DPercentageChangeSchema: Schema<FloorPrice30DPercentageChange> =
  s.object<FloorPrice30DPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
