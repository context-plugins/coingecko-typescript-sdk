import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price 1 year percentage change */
export type FloorPrice1YPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const floorPrice1YPercentageChangeSchema: Schema<FloorPrice1YPercentageChange> =
  s.object<FloorPrice1YPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
