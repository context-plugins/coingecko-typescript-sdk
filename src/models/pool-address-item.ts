import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributesSchema, type Attributes } from "./attributes.js";
import { relationshipsSchema, type Relationships } from "./relationships.js";

export type PoolAddressItem = {
  /** Pool identifier */
  id: string;
  /** Resource type */
  type: string;
  attributes: Attributes;
  /** Related resources */
  relationships: Relationships;
};

export const poolAddressItemSchema: Schema<PoolAddressItem> = s.object<PoolAddressItem>({
  id: s.string(),
  type: s.string(),
  attributes: attributesSchema,
  relationships: relationshipsSchema,
});
