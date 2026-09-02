import { s, type Schema } from "../core/index.js";
import { attributes5Schema, type Attributes5 } from "./attributes5.js";
import { relationships1Schema, type Relationships1 } from "./relationships1.js";

export type Data10 = {
  id: string;
  type: string;
  attributes: Attributes5;
  relationships: Relationships1;
};

export const data10Schema: Schema<Data10> = s.object<Data10>({
  id: s.string(),
  type: s.string(),
  attributes: attributes5Schema,
  relationships: relationships1Schema,
});
