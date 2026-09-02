import { s, type Schema } from "../core/index.js";
import { data21Schema, type Data21 } from "./data21.js";
import { included6Schema, type Included6 } from "./included6.js";

export type Pool = {
  data: Data21[];
  included?: Included6[];
};

export const poolSchema: Schema<Pool> = s.object<Pool>({
  data: s.array(s.lazy(() => data21Schema)),
  included: s.optional(s.array(s.lazy(() => included6Schema))),
});
