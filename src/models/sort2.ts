import { s, type EnumSchema } from "../core/index.js";

export const Sort2 = {
  H24VolumeUsdLiquidityDesc: "h24_volume_usd_liquidity_desc",
  H24TxCountDesc: "h24_tx_count_desc",
  H24VolumeUsdDesc: "h24_volume_usd_desc",
} as const;
export type Sort2 = (typeof Sort2)[keyof typeof Sort2] | (string & {});

export const sort2Schema: EnumSchema<Sort2> = s.enumOf<Sort2>(Sort2);
