import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice14DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice14DPercentageChangeSchema: Schema<FloorPrice14DPercentageChange> =
  s.object<FloorPrice14DPercentageChange>({
    usd: s.optional(s.number()),
    nativeCurrency: s.optional(s.number()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
