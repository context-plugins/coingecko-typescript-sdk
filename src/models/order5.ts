import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order5 = {
  TotalHoldingsUsdDesc: "total_holdings_usd_desc",
  TotalHoldingsUsdAsc: "total_holdings_usd_asc",
} as const;
export type Order5 = (typeof Order5)[keyof typeof Order5] | (string & {});

export const order5Schema: EnumSchema<Order5> = s.enumOf<Order5>(Order5);
