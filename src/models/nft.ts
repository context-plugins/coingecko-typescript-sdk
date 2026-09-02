import { s, type Schema } from "../core/index.js";

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
