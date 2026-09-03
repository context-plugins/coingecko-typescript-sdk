import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeTickers = {
  All: "all",
  Unexpired: "unexpired",
} as const;
export type IncludeTickers = (typeof IncludeTickers)[keyof typeof IncludeTickers] | (string & {});

export const includeTickersSchema: EnumSchema<IncludeTickers> = s.enumOf<IncludeTickers>(IncludeTickers);
