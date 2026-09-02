import { s, type EnumSchema } from "../core/index.js";

export const Include2 = {
  Pool: "pool",
} as const;
export type Include2 = (typeof Include2)[keyof typeof Include2] | (string & {});

export const include2Schema: EnumSchema<Include2> = s.enumOf<Include2>(Include2);
