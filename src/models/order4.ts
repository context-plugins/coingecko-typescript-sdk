import { s, type EnumSchema } from "../core/index.js";

export const Order4 = {
  NameAsc: "name_asc",
  NameDesc: "name_desc",
  OpenInterestBtcAsc: "open_interest_btc_asc",
  OpenInterestBtcDesc: "open_interest_btc_desc",
  TradeVolume24HBtcAsc: "trade_volume_24h_btc_asc",
  TradeVolume24HBtcDesc: "trade_volume_24h_btc_desc",
} as const;
export type Order4 = (typeof Order4)[keyof typeof Order4] | (string & {});

export const order4Schema: EnumSchema<Order4> = s.enumOf<Order4>(Order4);
