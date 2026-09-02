import { s, type EnumSchema } from "../core/index.js";

export const IncludeTokens = {
  Top: "top",
  All: "all",
} as const;
export type IncludeTokens = (typeof IncludeTokens)[keyof typeof IncludeTokens] | (string & {});

export const includeTokensSchema: EnumSchema<IncludeTokens> = s.enumOf<IncludeTokens>(IncludeTokens);
