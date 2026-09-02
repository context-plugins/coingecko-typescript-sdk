import { s, type EnumSchema } from "../core/index.js";

export const Include = {
  TopPools: "top_pools",
} as const;
export type Include = (typeof Include)[keyof typeof Include] | (string & {});

export const includeSchema: EnumSchema<Include> = s.enumOf<Include>(Include);
