import { s, type Schema } from "../core/index.js";
import { attributes8Schema, type Attributes8 } from "./attributes8.js";

export type Included3 = {
  id?: string;
  type?: string;
  attributes?: Attributes8;
};

export const included3Schema: Schema<Included3> = s.object<Included3>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes8Schema)),
});
