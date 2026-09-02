import { s, type Schema } from "../core/index.js";
import { attributes7Schema, type Attributes7 } from "./attributes7.js";

export type TokenInfoItem = {
  id: string;
  type: string;
  attributes: Attributes7;
};

export const tokenInfoItemSchema: Schema<TokenInfoItem> = s.object<TokenInfoItem>({
  id: s.string(),
  type: s.string(),
  attributes: attributes7Schema,
});
