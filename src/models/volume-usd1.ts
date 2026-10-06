import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Volume in USD */
export type VolumeUsd1 = {
  h24?: string;
};

export const volumeUsd1Schema: Schema<VolumeUsd1> = s.object<VolumeUsd1>({
  h24: s.optional(s.string()),
});
