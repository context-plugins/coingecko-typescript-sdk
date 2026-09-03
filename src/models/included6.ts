import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes13Schema, type Attributes13 } from "./attributes13.js";

export type Included6 = {
  id?: string;
  type?: string;
  attributes?: Attributes13;
};

export const included6Schema: Schema<Included6> = s.object<Included6>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes13Schema)),
});
