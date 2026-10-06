import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection all time highs change percentage */
export type AthChangePercentage = {
  nativeCurrency?: number;
  usd?: number;
};

export const athChangePercentageSchema: Schema<AthChangePercentage> = s.object<AthChangePercentage>({
  nativeCurrency: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
