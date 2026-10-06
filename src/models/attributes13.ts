import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes13 = {
  address?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
  imageUrl?: string | null;
  coingeckoCoinId?: string | null;
  coingeckoAssetPlatformId?: string;
};

export const attributes13Schema: Schema<Attributes13> = s.object<Attributes13>({
  address: s.optional(s.string()),
  name: s.optional(s.string()),
  symbol: s.optional(s.string()),
  decimals: s.optional(s.int()),
  imageUrl: s.optionalNullable(s.string()),
  coingeckoCoinId: s.optionalNullable(s.string()),
  coingeckoAssetPlatformId: s.optional(s.string()),
  _keysMap: {
    imageUrl: "image_url",
    coingeckoCoinId: "coingecko_coin_id",
    coingeckoAssetPlatformId: "coingecko_asset_platform_id",
  },
});
