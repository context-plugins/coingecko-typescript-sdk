import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NfTsList = {
  /** NFT collection ID */
  id: string;
  /** NFT collection contract address */
  contractAddress: string;
  /** NFT collection name */
  name: string;
  /** NFT collection asset platform ID */
  assetPlatformId: string;
  /** NFT collection symbol */
  symbol: string;
};

export const nfTsListSchema: Schema<NfTsList> = s.object<NfTsList>({
  id: s.string(),
  contractAddress: s.string(),
  name: s.string(),
  assetPlatformId: s.string(),
  symbol: s.string(),
  _keysMap: {
    contractAddress: "contract_address",
    assetPlatformId: "asset_platform_id",
  },
});
