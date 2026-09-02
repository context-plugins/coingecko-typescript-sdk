import { s, type Schema } from "../core/index.js";
import { attributes6Schema, type Attributes6 } from "./attributes6.js";

export type Included2 = {
  id?: string;
  type?: string;
  attributes?: Attributes6;
};

export const included2Schema: Schema<Included2> = s.object<Included2>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  attributes: s.optional(s.lazy(() => attributes6Schema)),
});
