import { s, type EnumSchema } from "../core/index.js";

export const Order7 = {
  H24VolumeUsdAsc: "h24_volume_usd_asc",
  H24VolumeUsdDesc: "h24_volume_usd_desc",
  H24VolumeNativeAsc: "h24_volume_native_asc",
  H24VolumeNativeDesc: "h24_volume_native_desc",
  FloorPriceNativeAsc: "floor_price_native_asc",
  FloorPriceNativeDesc: "floor_price_native_desc",
  MarketCapNativeAsc: "market_cap_native_asc",
  MarketCapNativeDesc: "market_cap_native_desc",
  MarketCapUsdAsc: "market_cap_usd_asc",
  MarketCapUsdDesc: "market_cap_usd_desc",
} as const;
export type Order7 = (typeof Order7)[keyof typeof Order7] | (string & {});

export const order7Schema: EnumSchema<Order7> = s.enumOf<Order7>(Order7);
