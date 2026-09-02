import { s, type EnumSchema } from "../core/index.js";

export const Order2 = {
  MarketCapDesc: "market_cap_desc",
  MarketCapAsc: "market_cap_asc",
  NameDesc: "name_desc",
  NameAsc: "name_asc",
  MarketCapChange24HDesc: "market_cap_change_24h_desc",
  MarketCapChange24HAsc: "market_cap_change_24h_asc",
} as const;
export type Order2 = (typeof Order2)[keyof typeof Order2] | (string & {});

export const order2Schema: EnumSchema<Order2> = s.enumOf<Order2>(Order2);
