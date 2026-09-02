import { s, type EnumSchema } from "../core/index.js";

export const Include3 = {
  Network: "network",
} as const;
export type Include3 = (typeof Include3)[keyof typeof Include3] | (string & {});

export const include3Schema: EnumSchema<Include3> = s.enumOf<Include3>(Include3);
