import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Net buy volume in USD over various timeframes */
export type NetBuyVolumeUsd = {
  m5?: string;
  m15?: string;
  m30?: string;
  h1?: string;
  h6?: string;
  h24?: string;
};

export const netBuyVolumeUsdSchema: Schema<NetBuyVolumeUsd> = s.object<NetBuyVolumeUsd>({
  m5: s.optional(s.string()),
  m15: s.optional(s.string()),
  m30: s.optional(s.string()),
  h1: s.optional(s.string()),
  h6: s.optional(s.string()),
  h24: s.optional(s.string()),
});
