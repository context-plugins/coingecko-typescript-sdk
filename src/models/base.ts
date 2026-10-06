import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Base token metadata */
export type Base = {
  name?: string;
  symbol?: string;
  coingeckoCoinId?: string | null;
  address?: string;
};

export const baseSchema: Schema<Base> = s.object<Base>({
  name: s.optional(s.string()),
  symbol: s.optional(s.string()),
  coingeckoCoinId: s.optionalNullable(s.string()),
  address: s.optional(s.string()),
  _keysMap: {
    coingeckoCoinId: "coingecko_coin_id",
  },
});
