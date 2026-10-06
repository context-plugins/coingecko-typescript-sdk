import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Nft = {
  /** NFT collection ID */
  id: string;
  /** NFT collection name */
  name: string;
  /** NFT collection symbol */
  symbol: string;
  /** NFT collection thumb image URL */
  thumb: string;
};

export const nftSchema: Schema<Nft> = s.object<Nft>({
  id: s.string(),
  name: s.string(),
  symbol: s.string(),
  thumb: s.string(),
});
