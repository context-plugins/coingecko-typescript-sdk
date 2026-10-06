import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** NFT collection all time highs date */
export type AthDate = {
  nativeCurrency?: Date;
  usd?: Date;
};

export const athDateSchema: Schema<AthDate> = s.object<AthDate>({
  nativeCurrency: s.optional(s.dateTime()),
  usd: s.optional(s.dateTime()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
