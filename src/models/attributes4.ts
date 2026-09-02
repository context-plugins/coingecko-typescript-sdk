import { s, type Schema } from "../core/index.js";

export type Attributes4 = {
  ohlcvList: number[][];
};

export const attributes4Schema: Schema<Attributes4> = s.object<Attributes4>({
  ohlcvList: s.array(s.array(s.number())),
  _keysMap: {
    ohlcvList: "ohlcv_list",
  },
});
