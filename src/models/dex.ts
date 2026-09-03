import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type Dex = {
  data?: Data5;
};

export const dexSchema: Schema<Dex> = s.object<Dex>({
  data: s.optional(s.lazy(() => data5Schema)),
});
