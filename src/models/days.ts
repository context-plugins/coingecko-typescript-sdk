import { s, type EnumSchema } from "../core/index.js";

export const Days = {
  _1: "1",
  _7: "7",
  _14: "14",
  _30: "30",
  _90: "90",
  _180: "180",
  _365: "365",
} as const;
export type Days = (typeof Days)[keyof typeof Days] | (string & {});

export const daysSchema: EnumSchema<Days> = s.enumOf<Days>(Days);
