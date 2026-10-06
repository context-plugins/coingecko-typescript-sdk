import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 30 days percentage change */
export type FloorPrice30DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice30DPercentageChangeSchema: Schema<FloorPrice30DPercentageChange> =
  s.object<FloorPrice30DPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
