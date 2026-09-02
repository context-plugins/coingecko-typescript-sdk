import { s, type Schema } from "../core/index.js";
import { attributes14Schema, type Attributes14 } from "./attributes14.js";
import { relationships6Schema, type Relationships6 } from "./relationships6.js";

export type Data26 = {
  id: string;
  type: string;
  attributes: Attributes14;
  relationships: Relationships6;
};

export const data26Schema: Schema<Data26> = s.object<Data26>({
  id: s.string(),
  type: s.string(),
  attributes: attributes14Schema,
  relationships: relationships6Schema,
});
