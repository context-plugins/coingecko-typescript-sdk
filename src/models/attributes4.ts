import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attributes4 = {
  ohlcvList: number[][];
};

export const attributes4Schema: Schema<Attributes4> = s.object<Attributes4>({
  ohlcvList: s.array(s.array(s.number())),
  _keysMap: {
    ohlcvList: "ohlcv_list",
  },
});
