import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributesSchema, type Attributes } from "./attributes.js";
import { relationshipsSchema, type Relationships } from "./relationships.js";

export type PoolAddressItem = {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
};

export const poolAddressItemSchema: Schema<PoolAddressItem> = s.object<PoolAddressItem>({
  id: s.string(),
  type: s.string(),
  attributes: attributesSchema,
  relationships: relationshipsSchema,
});
