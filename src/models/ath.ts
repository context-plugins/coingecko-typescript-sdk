import { s, type Schema } from "../core/index.js";

export type Ath = {
  nativeCurrency?: number;
  usd?: number;
};

export const athSchema: Schema<Ath> = s.object<Ath>({
  nativeCurrency: s.optional(s.number()),
  usd: s.optional(s.number()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
