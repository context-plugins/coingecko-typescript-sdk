import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes3Schema, type Attributes3 } from "./attributes3.js";

export type Data8 = {
  id: string;
  type: string;
  attributes: Attributes3;
};

export const data8Schema: Schema<Data8> = s.object<Data8>({
  id: s.string(),
  type: s.string(),
  attributes: attributes3Schema,
});
