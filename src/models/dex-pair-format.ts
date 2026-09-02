import { s, type EnumSchema } from "../core/index.js";

export const DexPairFormat = {
  ContractAddress: "contract_address",
  Symbol: "symbol",
} as const;
export type DexPairFormat = (typeof DexPairFormat)[keyof typeof DexPairFormat] | (string & {});

export const dexPairFormatSchema: EnumSchema<DexPairFormat> = s.enumOf<DexPairFormat>(DexPairFormat);
