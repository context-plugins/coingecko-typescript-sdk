import { s, type Schema } from "../core/index.js";

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
