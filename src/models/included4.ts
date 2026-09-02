import { s, type Schema } from "../core/index.js";
import { attributes10Schema, type Attributes10 } from "./attributes10.js";
import { relationships4Schema, type Relationships4 } from "./relationships4.js";

export type Included4 = {
  id?: string;
  type?: string;
  attributes?: Attributes10;
  relationships?: Relationships4;
};

export const included4Schema: Schema<Included4> = s.object<Included4>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes10Schema)),
  relationships: s.optional(s.lazy(() => relationships4Schema)),
});
