import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 60 days percentage change */
export type FloorPrice60DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice60DPercentageChangeSchema: Schema<FloorPrice60DPercentageChange> =
  s.object<FloorPrice60DPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
