import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection floor price */
export type FloorPrice = {
  nativeCurrency?: number;
  usd?: number;
};

export const floorPriceSchema: Schema<FloorPrice> = s.object<FloorPrice>({
  nativeCurrency: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
