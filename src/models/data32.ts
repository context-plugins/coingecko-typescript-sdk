import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes17Schema, type Attributes17 } from "./attributes17.js";

export type Data32 = {
  id: string;
  type: string;
  attributes: Attributes17;
};

export const data32Schema: Schema<Data32> = s.object<Data32>({
  id: s.string(),
  type: s.string(),
  attributes: attributes17Schema,
});
