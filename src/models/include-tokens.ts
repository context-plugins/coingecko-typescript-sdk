import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeTokens = {
  Top: "top",
  All: "all",
} as const;
export type IncludeTokens = (typeof IncludeTokens)[keyof typeof IncludeTokens] | (string & {});

export const includeTokensSchema: EnumSchema<IncludeTokens> = s.enumOf<IncludeTokens>(IncludeTokens);
