import { s, type Schema } from "../core/index.js";
import { data3Schema, type Data3 } from "./data3.js";

export type Nft1 = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  nftContractId: number;
  nativeCurrencySymbol: string;
  floorPriceInNativeCurrency: number;
  floorPrice24HPercentageChange: number;
  data: Data3;
};

export const nft1Schema: Schema<Nft1> = s.object<Nft1>({
  id: s.string(),
  name: s.string(),
  symbol: s.string(),
  thumb: s.string(),
  nftContractId: s.number(),
  nativeCurrencySymbol: s.string(),
  floorPriceInNativeCurrency: s.number(),
  floorPrice24HPercentageChange: s.number(),
  data: data3Schema,
  _keysMap: {
    nftContractId: "nft_contract_id",
    nativeCurrencySymbol: "native_currency_symbol",
    floorPriceInNativeCurrency: "floor_price_in_native_currency",
    floorPrice24HPercentageChange: "floor_price_24h_percentage_change",
  },
});
