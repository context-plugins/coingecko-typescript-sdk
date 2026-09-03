import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenInfoItemSchema, type TokenInfoItem } from "./token-info-item.js";

export type TokenInfo = {
  data: TokenInfoItem;
};

export const tokenInfoSchema: Schema<TokenInfo> = s.object<TokenInfo>({
  data: tokenInfoItemSchema,
});
