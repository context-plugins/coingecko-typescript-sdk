import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice24HPercentageChangeSchema: Schema<FloorPrice24HPercentageChange> =
  s.object<FloorPrice24HPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
