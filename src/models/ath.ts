import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection all time highs */
export type Ath = {
  nativeCurrency?: number;
  usd?: number;
};

export const athSchema: Schema<Ath> = s.object<Ath>({
  nativeCurrency: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
