import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";

export type Data3 = {
  /** NFT collection floor price */
  floorPrice: string;
  /** NFT collection floor price in USD 24 hours percentage change */
  floorPriceInUsd24HPercentageChange: string;
  /** NFT collection volume in 24 hours */
  h24Volume: string;
  /** NFT collection 24 hours average sale price */
  h24AverageSalePrice: string;
  /** NFT collection sparkline image URL */
  sparkline: string;
  content: Content | null;
};

export const data3Schema: Schema<Data3> = s.object<Data3>({
  floorPrice: s.string(),
  floorPriceInUsd24HPercentageChange: s.string(),
  h24Volume: s.string(),
  h24AverageSalePrice: s.string(),
  sparkline: s.string(),
  content: s.nullable(s.lazy(() => contentSchema)),
  _keysMap: {
    floorPrice: "floor_price",
    floorPriceInUsd24HPercentageChange: "floor_price_in_usd_24h_percentage_change",
    h24Volume: "h24_volume",
    h24AverageSalePrice: "h24_average_sale_price",
  },
});
