import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes7Schema, type Attributes7 } from "./attributes7.js";
import { relationships2Schema, type Relationships2 } from "./relationships2.js";

export type Data12 = {
  /** Token identifier */
  id: string;
  /** Resource type */
  type: string;
  attributes: Attributes7;
  relationships: Relationships2;
};

export const data12Schema: Schema<Data12> = s.object<Data12>({
  id: s.string(),
  type: s.string(),
  attributes: attributes7Schema,
  relationships: relationships2Schema,
});
