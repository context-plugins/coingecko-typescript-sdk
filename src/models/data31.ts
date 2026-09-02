import { s, type Schema } from "../core/index.js";
import { attributes16Schema, type Attributes16 } from "./attributes16.js";

export type Data31 = {
  id: string;
  type: string;
  attributes: Attributes16;
};

export const data31Schema: Schema<Data31> = s.object<Data31>({
  id: s.string(),
  type: s.string(),
  attributes: attributes16Schema,
});
