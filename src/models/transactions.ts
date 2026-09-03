import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { h1Schema, type H1 } from "./h1.js";
import { m5Schema, type M5 } from "./m5.js";

export type Transactions = {
  m5?: M5;
  m15?: M5;
  m30?: M5;
  h1?: H1;
  h6?: H1;
  h24?: H1;
};

export const transactionsSchema: Schema<Transactions> = s.object<Transactions>({
  m5: s.optional(s.lazy(() => m5Schema)),
  m15: s.optional(s.lazy(() => m5Schema)),
  m30: s.optional(s.lazy(() => m5Schema)),
  h1: s.optional(s.lazy(() => h1Schema)),
  h6: s.optional(s.lazy(() => h1Schema)),
  h24: s.optional(s.lazy(() => h1Schema)),
});
