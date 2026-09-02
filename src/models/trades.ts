import { s, type Schema } from "../core/index.js";
import { data8Schema, type Data8 } from "./data8.js";

export type Trades = {
  data: Data8[];
};

export const tradesSchema: Schema<Trades> = s.object<Trades>({
  data: s.array(s.lazy(() => data8Schema)),
});
