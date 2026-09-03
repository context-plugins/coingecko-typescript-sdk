import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type Global = {
  data: Data;
};

export const globalSchema: Schema<Global> = s.object<Global>({
  data: dataSchema,
});
