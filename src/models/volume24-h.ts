import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
