import { s, type Schema } from "../core/index.js";
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
  id: string;
  webSlug: string;
  contractAddress: string;
  assetPlatformId: string;
  name: string;
  symbol: string;
  image: Image5;
  bannerImage: string;
  description: string;
  nativeCurrency: string;
  nativeCurrencySymbol: string;
  marketCapRank: number | null;
  floorPrice: FloorPrice;
  marketCap: MarketCap;
  volume24H: Volume24H;
  floorPriceInUsd24HPercentageChange: number;
  floorPrice24HPercentageChange: FloorPrice24HPercentageChange;
  marketCap24HPercentageChange: MarketCap24HPercentageChange;
  volume24HPercentageChange: Volume24HPercentageChange;
  numberOfUniqueAddresses: number;
  numberOfUniqueAddresses24HPercentageChange: number;
  volumeInUsd24HPercentageChange: number;
  totalSupply: number;
  oneDaySales: number | null;
  oneDaySales24HPercentageChange: number;
  oneDayAverageSalePrice: number | null;
  oneDayAverageSalePrice24HPercentageChange: number;
  links: Links2;
  floorPrice7DPercentageChange: FloorPrice7DPercentageChange;
  floorPrice14DPercentageChange: FloorPrice14DPercentageChange;
  floorPrice30DPercentageChange: FloorPrice30DPercentageChange;
  floorPrice60DPercentageChange: FloorPrice60DPercentageChange;
  floorPrice1YPercentageChange: FloorPrice1YPercentageChange;
  explorers: Explorer[];
  userFavoritesCount: number;
  ath: Ath;
  athChangePercentage: AthChangePercentage;
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
  marketCapRank: s.nullable(s.number()),
  floorPrice: floorPriceSchema,
  marketCap: marketCapSchema,
  volume24H: volume24HSchema,
  floorPriceInUsd24HPercentageChange: s.number(),
  floorPrice24HPercentageChange: floorPrice24HPercentageChangeSchema,
  marketCap24HPercentageChange: marketCap24HPercentageChangeSchema,
  volume24HPercentageChange: volume24HPercentageChangeSchema,
  numberOfUniqueAddresses: s.number(),
  numberOfUniqueAddresses24HPercentageChange: s.number(),
  volumeInUsd24HPercentageChange: s.number(),
  totalSupply: s.number(),
  oneDaySales: s.nullable(s.number()),
  oneDaySales24HPercentageChange: s.number(),
  oneDayAverageSalePrice: s.nullable(s.number()),
  oneDayAverageSalePrice24HPercentageChange: s.number(),
  links: links2Schema,
  floorPrice7DPercentageChange: floorPrice7DPercentageChangeSchema,
  floorPrice14DPercentageChange: floorPrice14DPercentageChangeSchema,
  floorPrice30DPercentageChange: floorPrice30DPercentageChangeSchema,
  floorPrice60DPercentageChange: floorPrice60DPercentageChangeSchema,
  floorPrice1YPercentageChange: floorPrice1YPercentageChangeSchema,
  explorers: s.array(s.lazy(() => explorerSchema)),
  userFavoritesCount: s.number(),
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
