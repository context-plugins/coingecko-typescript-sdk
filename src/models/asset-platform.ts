import { s, type Schema } from "../core/index.js";
import { image3Schema, type Image3 } from "./image3.js";

export type AssetPlatform = {
  id: string;
  chainIdentifier: number | null;
  name: string;
  shortname: string;
  nativeCoinId: string | null;
  image: Image3;
};

export const assetPlatformSchema: Schema<AssetPlatform> = s.object<AssetPlatform>({
  id: s.string(),
  chainIdentifier: s.nullable(s.number()),
  name: s.string(),
  shortname: s.string(),
  nativeCoinId: s.nullable(s.string()),
  image: image3Schema,
  _keysMap: {
    chainIdentifier: "chain_identifier",
    nativeCoinId: "native_coin_id",
  },
});
