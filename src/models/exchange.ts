import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchange = {
  /** Exchange ID */
  id: string;
  /** Exchange name */
  name: string;
  /** Exchange market type */
  marketType: string;
  /** Exchange thumb image URL */
  thumb: string;
  /** Exchange large image URL */
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
