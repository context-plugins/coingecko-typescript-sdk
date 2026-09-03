import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributes11Schema, type Attributes11 } from "./attributes11.js";
import { relationships4Schema, type Relationships4 } from "./relationships4.js";

export type Included5 = {
  id?: string;
  type?: string;
  attributes?: Attributes11;
  relationships?: Relationships4;
};

export const included5Schema: Schema<Included5> = s.object<Included5>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes11Schema)),
  relationships: s.optional(s.lazy(() => relationships4Schema)),
});
