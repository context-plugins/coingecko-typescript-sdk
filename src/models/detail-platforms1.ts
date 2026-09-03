import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailPlatforms1 = {
  decimalPlace?: number | null;
  contractAddress?: string;
};

export const detailPlatforms1Schema: Schema<DetailPlatforms1> = s.object<DetailPlatforms1>({
  decimalPlace: s.optionalNullable(s.number()),
  contractAddress: s.optional(s.string()),
  _keysMap: {
    decimalPlace: "decimal_place",
    contractAddress: "contract_address",
  },
});
