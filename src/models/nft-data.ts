import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { athChangePercentageSchema, type AthChangePercentage } from "./ath-change-percentage.js";
import { athDateSchema, type AthDate } from "./ath-date.js";
import { athSchema, type Ath } from "./ath.js";
import { explorerSchema, type Explorer } from "./explorer.js";
import { floorPriceSchema, type FloorPrice } from "./floor-price.js";
import {
  floorPrice1YPercentageChangeSchema,
  type FloorPrice1YPercentageChange,
} from "./floor-price1-ypercentage-change.js";
import {
  floorPrice14DPercentageChangeSchema,
  type FloorPrice14DPercentageChange,
} from "./floor-price14-dpercentage-change.js";
import {
  floorPrice24HPercentageChangeSchema,
  type FloorPrice24HPercentageChange,
} from "./floor-price24-hpercentage-change.js";
import {
  floorPrice30DPercentageChangeSchema,
  type FloorPrice30DPercentageChange,
} from "./floor-price30-dpercentage-change.js";
import {
  floorPrice60DPercentageChangeSchema,
  type FloorPrice60DPercentageChange,
} from "./floor-price60-dpercentage-change.js";
import {
  floorPrice7DPercentageChangeSchema,
  type FloorPrice7DPercentageChange,
} from "./floor-price7-dpercentage-change.js";
import { image5Schema, type Image5 } from "./image5.js";
import { links2Schema, type Links2 } from "./links2.js";
import { marketCapSchema, type MarketCap } from "./market-cap.js";
import {
  marketCap24HPercentageChangeSchema,
  type MarketCap24HPercentageChange,
} from "./market-cap24-hpercentage-change.js";
import { volume24HSchema, type Volume24H } from "./volume24-h.js";
import {
  volume24HPercentageChangeSchema,
  type Volume24HPercentageChange,
} from "./volume24-hpercentage-change.js";

export type NftData = {
  /** NFT collection ID */
  id: string;
  /** NFT collection web slug */
  webSlug: string;
  /** NFT collection contract address */
  contractAddress: string;
  /** NFT collection asset platform ID */
  assetPlatformId: string;
  /** NFT collection name */
  name: string;
  /** NFT collection symbol */
  symbol: string;
  /** NFT collection image URLs */
  image: Image5;
  /** NFT collection banner image URL */
  bannerImage: string;
  /** NFT collection description */
  description: string;
  /** NFT collection native currency */
  nativeCurrency: string;
  /** NFT collection native currency symbol */
  nativeCurrencySymbol: string;
  /** NFT collection market cap rank */
  marketCapRank: number | null;
  /** NFT collection floor price */
  floorPrice: FloorPrice;
  /** NFT collection market cap */
  marketCap: MarketCap;
  /** NFT collection volume in 24 hours */
  volume24H: Volume24H;
  /** NFT collection floor price in USD 24 hours percentage change */
  floorPriceInUsd24HPercentageChange: number;
  /** NFT collection floor price 24 hours percentage change */
  floorPrice24HPercentageChange: FloorPrice24HPercentageChange;
  /** NFT collection market cap 24 hours percentage change */
  marketCap24HPercentageChange: MarketCap24HPercentageChange;
  /** NFT collection volume in 24 hours percentage change */
  volume24HPercentageChange: Volume24HPercentageChange;
  /** Number of unique addresses owning the NFTs */
  numberOfUniqueAddresses: number;
  /** Number of unique addresses 24 hours percentage change */
  numberOfUniqueAddresses24HPercentageChange: number;
  /** NFT collection volume in USD 24 hours percentage change */
  volumeInUsd24HPercentageChange: number;
  /** NFT collection total supply */
  totalSupply: number;
  /** NFT collection one day sales */
  oneDaySales: number | null;
  /** NFT collection one day sales 24 hours percentage change */
  oneDaySales24HPercentageChange: number;
  /** NFT collection one day average sale price */
  oneDayAverageSalePrice: number | null;
  /** NFT collection one day average sale price 24 hours percentage change */
  oneDayAverageSalePrice24HPercentageChange: number;
  /** NFT collection links */
  links: Links2;
  /** NFT collection floor price 7 days percentage change */
  floorPrice7DPercentageChange: FloorPrice7DPercentageChange;
  /** NFT collection floor price 14 days percentage change */
  floorPrice14DPercentageChange: FloorPrice14DPercentageChange;
  /** NFT collection floor price 30 days percentage change */
  floorPrice30DPercentageChange: FloorPrice30DPercentageChange;
  /** NFT collection floor price 60 days percentage change */
  floorPrice60DPercentageChange: FloorPrice60DPercentageChange;
  /** NFT collection floor price 1 year percentage change */
  floorPrice1YPercentageChange: FloorPrice1YPercentageChange;
  /** NFT collection block explorer links */
  explorers: Explorer[];
  /** NFT collection user favorites count */
  userFavoritesCount: number;
  /** NFT collection all time highs */
  ath: Ath;
  /** NFT collection all time highs change percentage */
  athChangePercentage: AthChangePercentage;
  /** NFT collection all time highs date */
  athDate: AthDate;
};

export const nftDataSchema: Schema<NftData> = s.object<NftData>({
  id: s.string(),
  webSlug: s.string(),
  contractAddress: s.string(),
  assetPlatformId: s.string(),
  name: s.string(),
  symbol: s.string(),
  image: image5Schema,
  bannerImage: s.string(),
  description: s.string(),
  nativeCurrency: s.string(),
  nativeCurrencySymbol: s.string(),
  marketCapRank: s.nullable(s.int()),
  floorPrice: floorPriceSchema,
  marketCap: marketCapSchema,
  volume24H: volume24HSchema,
  floorPriceInUsd24HPercentageChange: s.float64(),
  floorPrice24HPercentageChange: floorPrice24HPercentageChangeSchema,
  marketCap24HPercentageChange: marketCap24HPercentageChangeSchema,
  volume24HPercentageChange: volume24HPercentageChangeSchema,
  numberOfUniqueAddresses: s.float64(),
  numberOfUniqueAddresses24HPercentageChange: s.float64(),
  volumeInUsd24HPercentageChange: s.float64(),
  totalSupply: s.float64(),
  oneDaySales: s.nullable(s.float64()),
  oneDaySales24HPercentageChange: s.float64(),
  oneDayAverageSalePrice: s.nullable(s.float64()),
  oneDayAverageSalePrice24HPercentageChange: s.float64(),
  links: links2Schema,
  floorPrice7DPercentageChange: floorPrice7DPercentageChangeSchema,
  floorPrice14DPercentageChange: floorPrice14DPercentageChangeSchema,
  floorPrice30DPercentageChange: floorPrice30DPercentageChangeSchema,
  floorPrice60DPercentageChange: floorPrice60DPercentageChangeSchema,
  floorPrice1YPercentageChange: floorPrice1YPercentageChangeSchema,
  explorers: s.array(s.lazy(() => explorerSchema)),
  userFavoritesCount: s.int(),
  ath: athSchema,
  athChangePercentage: athChangePercentageSchema,
  athDate: athDateSchema,
  _keysMap: {
    webSlug: "web_slug",
    contractAddress: "contract_address",
    assetPlatformId: "asset_platform_id",
    bannerImage: "banner_image",
    nativeCurrency: "native_currency",
    nativeCurrencySymbol: "native_currency_symbol",
    marketCapRank: "market_cap_rank",
    floorPrice: "floor_price",
    marketCap: "market_cap",
    volume24H: "volume_24h",
    floorPriceInUsd24HPercentageChange: "floor_price_in_usd_24h_percentage_change",
    floorPrice24HPercentageChange: "floor_price_24h_percentage_change",
    marketCap24HPercentageChange: "market_cap_24h_percentage_change",
    volume24HPercentageChange: "volume_24h_percentage_change",
    numberOfUniqueAddresses: "number_of_unique_addresses",
    numberOfUniqueAddresses24HPercentageChange: "number_of_unique_addresses_24h_percentage_change",
    volumeInUsd24HPercentageChange: "volume_in_usd_24h_percentage_change",
    totalSupply: "total_supply",
    oneDaySales: "one_day_sales",
    oneDaySales24HPercentageChange: "one_day_sales_24h_percentage_change",
    oneDayAverageSalePrice: "one_day_average_sale_price",
    oneDayAverageSalePrice24HPercentageChange: "one_day_average_sale_price_24h_percentage_change",
    floorPrice7DPercentageChange: "floor_price_7d_percentage_change",
    floorPrice14DPercentageChange: "floor_price_14d_percentage_change",
    floorPrice30DPercentageChange: "floor_price_30d_percentage_change",
    floorPrice60DPercentageChange: "floor_price_60d_percentage_change",
    floorPrice1YPercentageChange: "floor_price_1y_percentage_change",
    userFavoritesCount: "user_favorites_count",
    athChangePercentage: "ath_change_percentage",
    athDate: "ath_date",
  },
});
