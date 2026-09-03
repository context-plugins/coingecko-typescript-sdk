import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data1 = {
  defiMarketCap: string;
  ethMarketCap: string;
  defiToEthRatio: string;
  tradingVolume24H: string;
  defiDominance: string;
  topCoinName: string;
  topCoinDefiDominance: number;
};

export const data1Schema: Schema<Data1> = s.object<Data1>({
  defiMarketCap: s.string(),
  ethMarketCap: s.string(),
  defiToEthRatio: s.string(),
  tradingVolume24H: s.string(),
  defiDominance: s.string(),
  topCoinName: s.string(),
  topCoinDefiDominance: s.number(),
  _keysMap: {
    defiMarketCap: "defi_market_cap",
    ethMarketCap: "eth_market_cap",
    defiToEthRatio: "defi_to_eth_ratio",
    tradingVolume24H: "trading_volume_24h",
    defiDominance: "defi_dominance",
    topCoinName: "top_coin_name",
    topCoinDefiDominance: "top_coin_defi_dominance",
  },
});
