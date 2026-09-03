import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type TopPools = {
  data?: Data5[];
};

export const topPoolsSchema: Schema<TopPools> = s.object<TopPools>({
  data: s.optional(s.array(s.lazy(() => data5Schema))),
});
