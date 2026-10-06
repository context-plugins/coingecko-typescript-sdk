import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes18Schema, type Attributes18 } from "./attributes18.js";

export type Data33 = {
  /** Network identifier */
  id: string;
  /** Resource type */
  type: string;
  attributes: Attributes18;
};

export const data33Schema: Schema<Data33> = s.object<Data33>({
  id: s.string(),
  type: s.string(),
  attributes: attributes18Schema,
});
