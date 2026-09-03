import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type BaseToken = {
  data?: Data5;
};

export const baseTokenSchema: Schema<BaseToken> = s.object<BaseToken>({
  data: s.optional(s.lazy(() => data5Schema)),
});
