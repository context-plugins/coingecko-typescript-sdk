import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection volume in 24 hours percentage change */
export type Volume24HPercentageChange = {
  usd?: number;
  nativeCurrency?: number;
};

export const volume24HPercentageChangeSchema: Schema<Volume24HPercentageChange> =
  s.object<Volume24HPercentageChange>({
    usd: s.optional(s.float64()),
    nativeCurrency: s.optional(s.float64()),
    _keysMap: {
      nativeCurrency: "native_currency",
    },
  });
