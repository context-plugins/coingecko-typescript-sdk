import { s, type Schema } from "../core/index.js";
import { data9Schema, type Data9 } from "./data9.js";
import { metaSchema, type Meta } from "./meta.js";

export type Ohlcv = {
  data: Data9;
  meta: Meta;
};

export const ohlcvSchema: Schema<Ohlcv> = s.object<Ohlcv>({
  data: data9Schema,
  meta: metaSchema,
});
