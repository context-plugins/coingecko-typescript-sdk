import { s, type Schema } from "../core/index.js";

export type Volume24H = {
  nativeCurrency?: number;
  usd?: number;
};

export const volume24HSchema: Schema<Volume24H> = s.object<Volume24H>({
  nativeCurrency: s.optional(s.number()),
  usd: s.optional(s.number()),
  _keysMap: {
    nativeCurrency: "native_currency",
  },
});
