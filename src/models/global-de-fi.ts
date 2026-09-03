import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type GlobalDeFi = {
  data: Data1;
};

export const globalDeFiSchema: Schema<GlobalDeFi> = s.object<GlobalDeFi>({
  data: data1Schema,
});
