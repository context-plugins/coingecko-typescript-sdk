import { s, type Schema } from "../core/index.js";
import { tokenInfoItemSchema, type TokenInfoItem } from "./token-info-item.js";

export type TokenInfo = {
  data: TokenInfoItem;
};

export const tokenInfoSchema: Schema<TokenInfo> = s.object<TokenInfo>({
  data: tokenInfoItemSchema,
});
