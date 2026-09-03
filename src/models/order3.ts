import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order3 = {
  MarketCapAsc: "market_cap_asc",
  MarketCapDesc: "market_cap_desc",
  TrustScoreDesc: "trust_score_desc",
  TrustScoreAsc: "trust_score_asc",
  VolumeDesc: "volume_desc",
  VolumeAsc: "volume_asc",
  BaseTarget: "base_target",
} as const;
export type Order3 = (typeof Order3)[keyof typeof Order3] | (string & {});

export const order3Schema: EnumSchema<Order3> = s.enumOf<Order3>(Order3);
