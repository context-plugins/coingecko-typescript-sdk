import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort = {
  H24TxCountDesc: "h24_tx_count_desc",
  H24VolumeUsdDesc: "h24_volume_usd_desc",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
