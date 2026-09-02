import { s, type Schema } from "../core/index.js";
import { attributes4Schema, type Attributes4 } from "./attributes4.js";

export type Data9 = {
  id: string;
  type: string;
  attributes: Attributes4;
};

export const data9Schema: Schema<Data9> = s.object<Data9>({
  id: s.string(),
  type: s.string(),
  attributes: attributes4Schema,
});
