import { s, type Schema } from "../core/index.js";

export type Exchange = {
  id: string;
  name: string;
  marketType: string;
  thumb: string;
  large: string;
};

export const exchangeSchema: Schema<Exchange> = s.object<Exchange>({
  id: s.string(),
  name: s.string(),
  marketType: s.string(),
  thumb: s.string(),
  large: s.string(),
  _keysMap: {
    marketType: "market_type",
  },
});
