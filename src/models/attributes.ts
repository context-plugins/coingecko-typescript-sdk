import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buyVolumeUsdSchema, type BuyVolumeUsd } from "./buy-volume-usd.js";
import { netBuyVolumeUsdSchema, type NetBuyVolumeUsd } from "./net-buy-volume-usd.js";
import { priceChangePercentageSchema, type PriceChangePercentage } from "./price-change-percentage.js";
import { sellVolumeUsdSchema, type SellVolumeUsd } from "./sell-volume-usd.js";
import { transactionsSchema, type Transactions } from "./transactions.js";
import { volumeUsdSchema, type VolumeUsd } from "./volume-usd.js";

export type Attributes = {
  /** Base token price in USD */
  baseTokenPriceUsd: string;
  /** Base token price in native currency */
  baseTokenPriceNativeCurrency: string;
  /** Base token balance in pool */
  baseTokenBalance?: string;
  /** Base token liquidity in USD */
  baseTokenLiquidityUsd?: string;
  /** Quote token price in USD */
  quoteTokenPriceUsd: string;
  /** Quote token price in native currency */
  quoteTokenPriceNativeCurrency: string;
  /** Quote token balance in pool */
  quoteTokenBalance?: string;
  /** Quote token liquidity in USD */
  quoteTokenLiquidityUsd?: string;
  /** Base token price in quote token */
  baseTokenPriceQuoteToken: string;
  /** Quote token price in base token */
  quoteTokenPriceBaseToken: string;
  /** Pool contract address */
  address: string;
  /** Pool name with fee tier */
  name: string;
  /** Pool name without fee tier */
  poolName: string;
  /** Pool fee percentage */
  poolFeePercentage: string;
  /** Pool creation timestamp */
  poolCreatedAt: string;
  /** Fully diluted valuation in USD */
  fdvUsd: string | null;
  /** Market cap in USD */
  marketCapUsd: string | null;
  /** Price change percentage over various timeframes */
  priceChangePercentage: PriceChangePercentage;
  /** Transaction counts over various timeframes */
  transactions: Transactions;
  /** Volume in USD over various timeframes */
  volumeUsd: VolumeUsd;
  /** Net buy volume in USD over various timeframes */
  netBuyVolumeUsd?: NetBuyVolumeUsd;
  /** Buy volume in USD over various timeframes */
  buyVolumeUsd?: BuyVolumeUsd;
  /** Sell volume in USD over various timeframes */
  sellVolumeUsd?: SellVolumeUsd;
  /** Total reserve in USD */
  reserveInUsd: string;
  /** Locked liquidity percentage */
  lockedLiquidityPercentage: string;
};

export const attributesSchema: Schema<Attributes> = s.object<Attributes>({
  baseTokenPriceUsd: s.string(),
  baseTokenPriceNativeCurrency: s.string(),
  baseTokenBalance: s.optional(s.string()),
  baseTokenLiquidityUsd: s.optional(s.string()),
  quoteTokenPriceUsd: s.string(),
  quoteTokenPriceNativeCurrency: s.string(),
  quoteTokenBalance: s.optional(s.string()),
  quoteTokenLiquidityUsd: s.optional(s.string()),
  baseTokenPriceQuoteToken: s.string(),
  quoteTokenPriceBaseToken: s.string(),
  address: s.string(),
  name: s.string(),
  poolName: s.string(),
  poolFeePercentage: s.string(),
  poolCreatedAt: s.string(),
  fdvUsd: s.nullable(s.string()),
  marketCapUsd: s.nullable(s.string()),
  priceChangePercentage: priceChangePercentageSchema,
  transactions: transactionsSchema,
  volumeUsd: volumeUsdSchema,
  netBuyVolumeUsd: s.optional(s.lazy(() => netBuyVolumeUsdSchema)),
  buyVolumeUsd: s.optional(s.lazy(() => buyVolumeUsdSchema)),
  sellVolumeUsd: s.optional(s.lazy(() => sellVolumeUsdSchema)),
  reserveInUsd: s.string(),
  lockedLiquidityPercentage: s.string(),
  _keysMap: {
    baseTokenPriceUsd: "base_token_price_usd",
    baseTokenPriceNativeCurrency: "base_token_price_native_currency",
    baseTokenBalance: "base_token_balance",
    baseTokenLiquidityUsd: "base_token_liquidity_usd",
    quoteTokenPriceUsd: "quote_token_price_usd",
    quoteTokenPriceNativeCurrency: "quote_token_price_native_currency",
    quoteTokenBalance: "quote_token_balance",
    quoteTokenLiquidityUsd: "quote_token_liquidity_usd",
    baseTokenPriceQuoteToken: "base_token_price_quote_token",
    quoteTokenPriceBaseToken: "quote_token_price_base_token",
    poolName: "pool_name",
    poolFeePercentage: "pool_fee_percentage",
    poolCreatedAt: "pool_created_at",
    fdvUsd: "fdv_usd",
    marketCapUsd: "market_cap_usd",
    priceChangePercentage: "price_change_percentage",
    volumeUsd: "volume_usd",
    netBuyVolumeUsd: "net_buy_volume_usd",
    buyVolumeUsd: "buy_volume_usd",
    sellVolumeUsd: "sell_volume_usd",
    reserveInUsd: "reserve_in_usd",
    lockedLiquidityPercentage: "locked_liquidity_percentage",
  },
});
