import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DexPairFormat = {
  ContractAddress: "contract_address",
  Symbol: "symbol",
} as const;
export type DexPairFormat = (typeof DexPairFormat)[keyof typeof DexPairFormat] | (string & {});

export const dexPairFormatSchema: EnumSchema<DexPairFormat> = s.enumOf<DexPairFormat>(DexPairFormat);
