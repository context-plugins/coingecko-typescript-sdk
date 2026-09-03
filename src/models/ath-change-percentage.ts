import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AthChangePercentage = {
  nativeCurrency?: number;
  usd?: number;
};

export const athChangePercentageSchema: Schema<AthChangePercentage> = s.object<AthChangePercentage>({
  nativeCurrency: s.optional(s.number()),
  usd: s.optional(s.number()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
