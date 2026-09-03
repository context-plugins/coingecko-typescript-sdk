import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order6 = {
  DateDesc: "date_desc",
  DateAsc: "date_asc",
  HoldingNetChangeDesc: "holding_net_change_desc",
  HoldingNetChangeAsc: "holding_net_change_asc",
  TransactionValueUsdDesc: "transaction_value_usd_desc",
  TransactionValueUsdAsc: "transaction_value_usd_asc",
  AverageCostDesc: "average_cost_desc",
  AverageCostAsc: "average_cost_asc",
} as const;
export type Order6 = (typeof Order6)[keyof typeof Order6] | (string & {});

export const order6Schema: EnumSchema<Order6> = s.enumOf<Order6>(Order6);
