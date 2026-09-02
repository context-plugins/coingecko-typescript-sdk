import { s, type EnumSchema } from "../core/index.js";

export const Currency = {
  Usd: "usd",
  Token: "token",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
