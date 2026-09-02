import { s, type EnumSchema } from "../core/index.js";

export const IncludeTickers = {
  All: "all",
  Unexpired: "unexpired",
} as const;
export type IncludeTickers = (typeof IncludeTickers)[keyof typeof IncludeTickers] | (string & {});

export const includeTickersSchema: EnumSchema<IncludeTickers> = s.enumOf<IncludeTickers>(IncludeTickers);
