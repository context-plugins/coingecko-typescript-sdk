import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 14 days percentage change */
export type FloorPrice14DPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice14DPercentageChangeSchema: Schema<FloorPrice14DPercentageChange> =
  s.object<FloorPrice14DPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
