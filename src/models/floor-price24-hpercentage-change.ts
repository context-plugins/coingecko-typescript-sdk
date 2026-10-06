import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 24 hours percentage change */
export type FloorPrice24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice24HPercentageChangeSchema: Schema<FloorPrice24HPercentageChange> =
  s.object<FloorPrice24HPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
