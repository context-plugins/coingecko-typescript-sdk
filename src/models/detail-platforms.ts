import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailPlatforms = {
  decimalPlace?: number | null;
  contractAddress?: string;
  geckoterminalUrl?: string;
};

export const detailPlatformsSchema: Schema<DetailPlatforms> = s.object<DetailPlatforms>({
  decimalPlace: s.optionalNullable(s.number()),
  contractAddress: s.optional(s.string()),
  geckoterminalUrl: s.optional(s.string()),
  _keysMap: {
    decimalPlace: "decimal_place",
    contractAddress: "contract_address",
    geckoterminalUrl: "geckoterminal_url",
  },
});
