import { s, type Schema } from "../core/index.js";

export type VolumeUsd2 = {
  m5?: string;
  m15?: string;
  m30?: string;
  h1?: string;
  h6?: string;
  h24?: string;
};

export const volumeUsd2Schema: Schema<VolumeUsd2> = s.object<VolumeUsd2>({
  m5: s.optional(s.string()),
  m15: s.optional(s.string()),
  m30: s.optional(s.string()),
  h1: s.optional(s.string()),
  h6: s.optional(s.string()),
  h24: s.optional(s.string()),
});
