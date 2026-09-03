import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FloorPrice = {
  nativeCurrency?: number;
  usd?: number;
};

export const floorPriceSchema: Schema<FloorPrice> = s.object<FloorPrice>({
  nativeCurrency: s.optional(s.number()),
  usd: s.optional(s.number()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
