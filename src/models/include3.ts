import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Include3 = {
  Network: "network",
} as const;
export type Include3 = (typeof Include3)[keyof typeof Include3] | (string & {});

export const include3Schema: EnumSchema<Include3> = s.enumOf<Include3>(Include3);
