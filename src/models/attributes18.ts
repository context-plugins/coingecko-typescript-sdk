import { s, type Schema } from "../core/index.js";

export type Attributes18 = {
  name: string;
  coingeckoAssetPlatformId: string;
};

export const attributes18Schema: Schema<Attributes18> = s.object<Attributes18>({
  name: s.string(),
  coingeckoAssetPlatformId: s.string(),
  _keysMap: {
    coingeckoAssetPlatformId: "coingecko_asset_platform_id",
  },
});
