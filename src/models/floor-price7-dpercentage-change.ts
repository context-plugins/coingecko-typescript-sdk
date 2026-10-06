import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 7 days percentage change */
export type FloorPrice7DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice7DPercentageChangeSchema: Schema<FloorPrice7DPercentageChange> =
  s.object<FloorPrice7DPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
