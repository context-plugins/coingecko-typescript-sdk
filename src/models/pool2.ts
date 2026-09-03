import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type Pool2 = {
  data?: Data5;
};

export const pool2Schema: Schema<Pool2> = s.object<Pool2>({
  data: s.optional(s.lazy(() => data5Schema)),
});
