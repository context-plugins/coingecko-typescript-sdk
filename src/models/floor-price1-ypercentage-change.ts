import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice1YPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice1YPercentageChangeSchema: Schema<FloorPrice1YPercentageChange> =
  s.object<FloorPrice1YPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
