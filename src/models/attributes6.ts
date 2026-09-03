import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes6 = {
  name?: string;
  coingeckoAssetPlatformId?: string;
};

export const attributes6Schema: Schema<Attributes6> = s.object<Attributes6>({
  name: s.optional(s.string()),
  coingeckoAssetPlatformId: s.optional(s.string()),
  _keysMap: {
    coingeckoAssetPlatformId: "coingecko_asset_platform_id",
  },
});
