import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes18 = {
  /** Network name */
  name: string;
  /** Corresponding CoinGecko asset platform ID */
  coingeckoAssetPlatformId: string;
};

export const attributes18Schema: Schema<Attributes18> = s.object<Attributes18>({
  name: s.string(),
  coingeckoAssetPlatformId: s.string(),
  _keysMap: {
    coingeckoAssetPlatformId: "coingecko_asset_platform_id",
  },
});
