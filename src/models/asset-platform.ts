import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { image3Schema, type Image3 } from "./image3.js";

export type AssetPlatform = {
  /** Asset platform ID */
  id: string;
  /** Chainlist's chain ID */
  chainIdentifier: number | null;
  /** Chain name */
  name: string;
  /** Chain shortname */
  shortname: string;
  /** Chain native coin ID */
  nativeCoinId: string | null;
  /** Asset platform image URLs */
  image: Image3;
};

export const assetPlatformSchema: Schema<AssetPlatform> = s.object<AssetPlatform>({
  id: s.string(),
  chainIdentifier: s.nullable(s.float64()),
  name: s.string(),
  shortname: s.string(),
  nativeCoinId: s.nullable(s.string()),
  image: image3Schema,
  _keysMap: {
    chainIdentifier: "chain_identifier",
    nativeCoinId: "native_coin_id",
  },
});
