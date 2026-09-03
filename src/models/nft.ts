import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Nft = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
};

export const nftSchema: Schema<Nft> = s.object<Nft>({
  id: s.string(),
  name: s.string(),
  symbol: s.string(),
  thumb: s.string(),
});
