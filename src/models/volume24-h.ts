import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection volume in 24 hours */
export type Volume24H = {
  nativeCurrency?: number;
  usd?: number;
};

export const volume24HSchema: Schema<Volume24H> = s.object<Volume24H>({
  nativeCurrency: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
