import { s, type Schema } from "../core/index.js";
import { attributes9Schema, type Attributes9 } from "./attributes9.js";
import { relationships3Schema, type Relationships3 } from "./relationships3.js";

export type TokenItem = {
  id: string;
  type: string;
  attributes: Attributes9;
  relationships: Relationships3;
};

export const tokenItemSchema: Schema<TokenItem> = s.object<TokenItem>({
  id: s.string(),
  type: s.string(),
  attributes: attributes9Schema,
  relationships: relationships3Schema,
});
