import { s, type Schema } from "../core/index.js";

export type VolumeUsd1 = {
  h24?: string;
};

export const volumeUsd1Schema: Schema<VolumeUsd1> = s.object<VolumeUsd1>({
  h24: s.optional(s.string()),
});
