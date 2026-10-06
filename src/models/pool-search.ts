import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data26Schema, type Data26 } from "./data26.js";
import { included6Schema, type Included6 } from "./included6.js";

export type PoolSearch = {
  data: Data26[];
  /** Included related resources, present when include parameter is specified */
  included?: Included6[];
};

export const poolSearchSchema: Schema<PoolSearch> = s.object<PoolSearch>({
  data: s.array(s.lazy(() => data26Schema)),
  included: s.optional(s.array(s.lazy(() => included6Schema))),
});
