import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type Network = {
  data?: Data5;
};

export const networkSchema: Schema<Network> = s.object<Network>({
  data: s.optional(s.lazy(() => data5Schema)),
});
