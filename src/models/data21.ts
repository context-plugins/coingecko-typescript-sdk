import { s, type Schema } from "../core/index.js";
import { attributes12Schema, type Attributes12 } from "./attributes12.js";
import { relationships6Schema, type Relationships6 } from "./relationships6.js";

export type Data21 = {
  id: string;
  type: string;
  attributes: Attributes12;
  relationships: Relationships6;
};

export const data21Schema: Schema<Data21> = s.object<Data21>({
  id: s.string(),
  type: s.string(),
  attributes: attributes12Schema,
  relationships: relationships6Schema,
});
