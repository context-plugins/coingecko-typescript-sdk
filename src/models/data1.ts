import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data1 = {
  /** DeFi market cap */
  defiMarketCap: string;
  /** ETH market cap */
  ethMarketCap: string;
  /** DeFi to ETH ratio */
  defiToEthRatio: string;
  /** DeFi trading volume in 24 hours */
  tradingVolume24H: string;
  /** DeFi dominance percentage */
  defiDominance: string;
  /** DeFi top coin name */
  topCoinName: string;
  /** DeFi top coin dominance percentage */
  topCoinDefiDominance: number;
};

export const data1Schema: Schema<Data1> = s.object<Data1>({
  defiMarketCap: s.string(),
  ethMarketCap: s.string(),
  defiToEthRatio: s.string(),
  tradingVolume24H: s.string(),
  defiDominance: s.string(),
  topCoinName: s.string(),
  topCoinDefiDominance: s.float64(),
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
