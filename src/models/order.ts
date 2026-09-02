import { s, type EnumSchema } from "../core/index.js";

export const Order = {
  MarketCapAsc: "market_cap_asc",
  MarketCapDesc: "market_cap_desc",
  VolumeAsc: "volume_asc",
  VolumeDesc: "volume_desc",
  IdAsc: "id_asc",
  IdDesc: "id_desc",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
