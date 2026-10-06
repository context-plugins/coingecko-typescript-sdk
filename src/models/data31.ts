import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes16Schema, type Attributes16 } from "./attributes16.js";

export type Data31 = {
  /** Request ID */
  id: string;
  /** Response type */
  type: string;
  attributes: Attributes16;
};

export const data31Schema: Schema<Data31> = s.object<Data31>({
  id: s.string(),
  type: s.string(),
  attributes: attributes16Schema,
});
