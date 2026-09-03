import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";

export type Data3 = {
  floorPrice: string;
  floorPriceInUsd24HPercentageChange: string;
  h24Volume: string;
  h24AverageSalePrice: string;
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
