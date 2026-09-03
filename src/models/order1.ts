import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Order1 = {
  TrustScoreDesc: "trust_score_desc",
  TrustScoreAsc: "trust_score_asc",
  VolumeDesc: "volume_desc",
  VolumeAsc: "volume_asc",
} as const;
export type Order1 = (typeof Order1)[keyof typeof Order1] | (string & {});

export const order1Schema: EnumSchema<Order1> = s.enumOf<Order1>(Order1);
