import { s, type Schema } from "../core/index.js";
import { data26Schema, type Data26 } from "./data26.js";
import { included6Schema, type Included6 } from "./included6.js";

export type PoolSearch = {
  data: Data26[];
  included?: Included6[];
};

export const poolSearchSchema: Schema<PoolSearch> = s.object<PoolSearch>({
  data: s.array(s.lazy(() => data26Schema)),
  included: s.optional(s.array(s.lazy(() => included6Schema))),
});
