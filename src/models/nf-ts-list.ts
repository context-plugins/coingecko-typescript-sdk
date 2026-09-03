import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NfTsList = {
  id: string;
  contractAddress: string;
  name: string;
  assetPlatformId: string;
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
