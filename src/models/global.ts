import { s, type Schema } from "../core/index.js";
import { dataSchema, type Data } from "./data.js";

export type Global = {
  data: Data;
};

export const globalSchema: Schema<Global> = s.object<Global>({
  data: dataSchema,
});
