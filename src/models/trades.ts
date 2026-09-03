import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";

export type Trades = {
  data: Data8[];
};

export const tradesSchema: Schema<Trades> = s.object<Trades>({
  data: s.array(s.lazy(() => data8Schema)),
});
