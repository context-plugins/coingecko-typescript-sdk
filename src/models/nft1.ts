import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type Nft1 = {
  /** NFT collection ID */
  id: string;
  /** NFT collection name */
  name: string;
  /** NFT collection symbol */
  symbol: string;
  /** NFT collection thumb image URL */
  thumb: string;
  /** NFT contract internal ID */
  nftContractId: number;
  /** NFT collection native currency symbol */
  nativeCurrencySymbol: string;
  /** NFT collection floor price in native currency */
  floorPriceInNativeCurrency: number;
  /** NFT collection floor price 24 hours percentage change */
  floorPrice24HPercentageChange: number;
  data: Data3;
};

export const nft1Schema: Schema<Nft1> = s.object<Nft1>({
  id: s.string(),
  name: s.string(),
  symbol: s.string(),
  thumb: s.string(),
  nftContractId: s.int(),
  nativeCurrencySymbol: s.string(),
  floorPriceInNativeCurrency: s.float64(),
  floorPrice24HPercentageChange: s.float64(),
  data: data3Schema,
  _keysMap: {
    nftContractId: "nft_contract_id",
    nativeCurrencySymbol: "native_currency_symbol",
    floorPriceInNativeCurrency: "floor_price_in_native_currency",
    floorPrice24HPercentageChange: "floor_price_24h_percentage_change",
  },
});
