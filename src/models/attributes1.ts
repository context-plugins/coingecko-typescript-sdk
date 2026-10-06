import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes1 = {
  address?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
  imageUrl?: string;
  coingeckoCoinId?: string;
};

export const attributes1Schema: Schema<Attributes1> = s.object<Attributes1>({
  address: s.optional(s.string()),
  name: s.optional(s.string()),
  symbol: s.optional(s.string()),
  decimals: s.optional(s.int()),
  imageUrl: s.optional(s.string()),
  coingeckoCoinId: s.optional(s.string()),
  _keysMap: {
    imageUrl: "image_url",
    coingeckoCoinId: "coingecko_coin_id",
  },
});
